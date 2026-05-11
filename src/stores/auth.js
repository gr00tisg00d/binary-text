import { defineStore } from "pinia";
import { ref, computed } from "vue";
import {
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import {
	doc,
	setDoc,
	getDoc,
	serverTimestamp,
	collection,
	addDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { auth, db, googleProvider } from "@/firebase";
import { useNotificationsStore } from "./notifications";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
	const user = ref(null);
	const loading = ref(true);

	// Promise that resolves after the first Firebase auth state emission
	let _authReady = null;

	const isAuthenticated = computed(() => !!user.value);
	const displayName = computed(
		() => user.value?.displayName || user.value?.email?.split("@")[0] || "User",
	);
	const photoURL = computed(() => user.value?.photoURL ?? null);

	// ── Initialization ────────────────────────────────────────────────

	function initAuth() {
		if (_authReady) return _authReady;

		_authReady = new Promise((resolve) => {
			onAuthStateChanged(auth, async (firebaseUser) => {
				if (firebaseUser) {
					user.value = firebaseUser;
					await _ensureUserProfile(firebaseUser);
				} else {
					user.value = null;
				}
				loading.value = false;
				resolve(firebaseUser);
			});
		});

		return _authReady;
	}

	async function _ensureUserProfile(firebaseUser) {
		const ref_ = doc(db, "users", firebaseUser.uid);
		const snap = await getDoc(ref_);
		if (!snap.exists()) {
			await setDoc(ref_, {
				uid: firebaseUser.uid,
				displayName:
					firebaseUser.displayName || firebaseUser.email.split("@")[0],
				email: firebaseUser.email,
				photoURL: firebaseUser.photoURL ?? null,
				createdAt: serverTimestamp(),
			});
		}
		// Seed bot account + conversation without blocking auth
		_ensureBotSetup(firebaseUser).catch((e) => console.error("[BotSetup]", e));
	}

	async function _ensureBotSetup(firebaseUser) {
		// Create bot user document if it doesn't exist
		const botRef = doc(db, "users", "binarysync-bot");
		const botSnap = await getDoc(botRef);
		if (!botSnap.exists()) {
			await setDoc(botRef, {
				uid: "binarysync-bot",
				displayName: "BinarySync Bot",
				email: "bot@binarysync.app",
				photoURL: null,
				isBot: true,
				createdAt: serverTimestamp(),
			});
		}

		// Ensure a conversation with the bot exists
		const participants = [firebaseUser.uid, "binarysync-bot"].sort();
		const sortedKey = participants.join("_");
		const q = query(
			collection(db, "conversations"),
			where("participantsSorted", "==", sortedKey),
		);
		const convSnap = await getDocs(q);
		if (!convSnap.empty) return;

		// Create the bot conversation with a welcome message
		const convRef = await addDoc(collection(db, "conversations"), {
			participants,
			participantsSorted: sortedKey,
			participantDetails: {
				[firebaseUser.uid]: {
					uid: firebaseUser.uid,
					displayName:
						firebaseUser.displayName ||
						firebaseUser.email?.split("@")[0] ||
						"User",
					photoURL: firebaseUser.photoURL ?? null,
				},
				"binarysync-bot": {
					uid: "binarysync-bot",
					displayName: "BinarySync Bot",
					photoURL: null,
					isBot: true,
				},
			},
			lastMessage: "Hi! I'm BinarySync Bot. Send me a message!",
			lastMessageBinary: "01001000 01101001",
			isBot: true,
			updatedAt: serverTimestamp(),
			createdAt: serverTimestamp(),
		});

		await addDoc(collection(db, "conversations", convRef.id, "messages"), {
			senderId: "binarysync-bot",
			senderName: "BinarySync Bot",
			binary:
				"01001000 01101001 00100001 00100000 01001001 00100111 01101101 00100000 01000010 01101001 01101110 01100001 01110010 01111001 01010011 01111001 01101110 01100011 00100000 01000010 01101111 01110100 00101110",
			text: "Hi! I'm BinarySync Bot. Send me a binary string or plain text — I'll always reply!",
			translatedText: null,
			language: "en",
			timestamp: serverTimestamp(),
		});
	}

	// ── Sign-in methods ───────────────────────────────────────────────

	async function signInWithGoogle() {
		const notifications = useNotificationsStore();
		try {
			const result = await signInWithPopup(auth, googleProvider);
			user.value = result.user;
			await _ensureUserProfile(result.user);
			notifications.add("Signed in successfully!", "success");
			const redirect = router.currentRoute.value.query.redirect;
			router.push(typeof redirect === "string" ? redirect : "/chat");
		} catch (err) {
			if (err.code !== "auth/popup-closed-by-user") {
				notifications.add(err.message, "error");
			}
		}
	}

	async function signInWithEmail(email, password) {
		const notifications = useNotificationsStore();
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			user.value = result.user;
			notifications.add("Signed in successfully!", "success");
			const redirect = router.currentRoute.value.query.redirect;
			router.push(typeof redirect === "string" ? redirect : "/chat");
		} catch (err) {
			const msg =
				err.code === "auth/invalid-credential"
					? "Invalid email or password."
					: err.message;
			notifications.add(msg, "error");
			throw err;
		}
	}

	async function registerWithEmail(email, password, name) {
		const notifications = useNotificationsStore();
		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			await updateProfile(result.user, { displayName: name });
			user.value = result.user;
			await _ensureUserProfile(result.user);
			notifications.add("Account created! Welcome to BinarySync.", "success");
			router.push("/chat");
		} catch (err) {
			const msg =
				err.code === "auth/email-already-in-use"
					? "That email is already registered."
					: err.message;
			notifications.add(msg, "error");
			throw err;
		}
	}

	async function logout() {
		const notifications = useNotificationsStore();
		await signOut(auth);
		user.value = null;
		notifications.add("Signed out.", "info");
		router.push("/");
	}

	return {
		user,
		loading,
		isAuthenticated,
		displayName,
		photoURL,
		initAuth,
		signInWithGoogle,
		signInWithEmail,
		registerWithEmail,
		logout,
		ensureBotSetup: _ensureBotSetup,
	};
});
