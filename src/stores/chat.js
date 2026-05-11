import { defineStore } from "pinia";
import { ref, computed } from "vue";
import {
	collection,
	doc,
	addDoc,
	getDoc,
	getDocs,
	onSnapshot,
	query,
	where,
	orderBy,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useAuthStore } from "./auth";
import { useNotificationsStore } from "./notifications";

export const BOT_UID = "binarysync-bot";

const _BOT_REPLIES = [
	{
		text: "Hello! I'm BinarySync Bot. Send me a binary string or plain text — I'll always reply!",
		binary: "01001000 01100101 01101100 01101100 01101111",
	},
	{
		text: "Fascinating! Your message decoded perfectly.",
		binary:
			"01000110 01100001 01110011 01100011 01101001 01101110 01100001 01110100 01101001 01101110 01100111",
	},
	{
		text: "Keep practicing those binary strings!",
		binary:
			"01001011 01100101 01100101 01110000 00100000 01110000 01110010 01100001 01100011 01110100 01101001 01100011 01101001 01101110 01100111",
	},
	{
		text: "Bit by bit — that's how we decode the world.",
		binary:
			"01000010 01101001 01110100 00100000 01100010 01111001 00100000 01100010 01101001 01110100",
	},
	{
		text: "Message received! Well transmitted.",
		binary:
			"01001101 01100101 01110011 01110011 01100001 01100111 01100101 00100000 01110010 01100101 01100011 01100101 01101001 01110110 01100101 01100100",
	},
	{
		text: "Amazing! You're getting good at binary.",
		binary: "01000001 01101101 01100001 01111010 01101001 01101110 01100111",
	},
	{
		text: "Binary is my native tongue. Keep transmitting!",
		binary:
			"01000010 01101001 01101110 01100001 01110010 01111001 00100000 01101001 01110011 00100000 01101101 01111001 00100000 01101110 01100001 01110100 01101001 01110110 01100101 00100000 01110100 01101111 01101110 01100111 01110101 01100101",
	},
	{
		text: "I decoded that instantly. Zero errors.",
		binary:
			"01011010 01100101 01110010 01101111 00100000 01100101 01110010 01110010 01101111 01110010 01110011",
	},
];

export const useChatStore = defineStore("chat", () => {
	const conversations = ref([]);
	const activeConversationId = ref(null);
	const messages = ref([]);
	const userSearchResults = ref([]);
	const loadingMessages = ref(false);

	let _unsubConversations = null;
	let _unsubMessages = null;

	const activeConversation = computed(
		() =>
			conversations.value.find((c) => c.id === activeConversationId.value) ??
			null,
	);

	// ── Conversations ─────────────────────────────────────────────────

	function listenToConversations() {
		const authStore = useAuthStore();
		if (!authStore.user) return;

		const q = query(
			collection(db, "conversations"),
			where("participants", "array-contains", authStore.user.uid),
			orderBy("updatedAt", "desc"),
		);

		_unsubConversations = onSnapshot(q, (snap) => {
			conversations.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
		});
	}

	function stopListeningToConversations() {
		_unsubConversations?.();
		_unsubConversations = null;
	}

	// ── Messages ──────────────────────────────────────────────────────

	function listenToMessages(conversationId) {
		_unsubMessages?.();
		_unsubMessages = null;
		messages.value = [];
		loadingMessages.value = true;
		activeConversationId.value = conversationId;

		const q = query(
			collection(db, "conversations", conversationId, "messages"),
			orderBy("timestamp", "asc"),
		);

		_unsubMessages = onSnapshot(q, (snap) => {
			messages.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
			loadingMessages.value = false;
		});
	}

	function stopListeningToMessages() {
		_unsubMessages?.();
		_unsubMessages = null;
		messages.value = [];
		activeConversationId.value = null;
	}

	// ── Send message ──────────────────────────────────────────────────

	async function sendMessage({
		binary,
		text,
		translatedText = null,
		language = "en",
	}) {
		const authStore = useAuthStore();
		const notifications = useNotificationsStore();

		if (!authStore.user || !activeConversationId.value) return;

		try {
			await addDoc(
				collection(db, "conversations", activeConversationId.value, "messages"),
				{
					senderId: authStore.user.uid,
					senderName: authStore.displayName,
					binary,
					text,
					translatedText,
					language,
					timestamp: serverTimestamp(),
				},
			);

			await updateDoc(doc(db, "conversations", activeConversationId.value), {
				lastMessage: text,
				lastMessageBinary: binary,
				updatedAt: serverTimestamp(),
			});

			// Trigger bot reply if this conversation is with the bot
			const conv = conversations.value.find(
				(c) => c.id === activeConversationId.value,
			);
			if (conv?.participants?.includes(BOT_UID)) {
				const convId = activeConversationId.value;
				const delay = 1000 + Math.floor(Math.random() * 1200);
				setTimeout(() => _sendBotReply(convId), delay);
			}
		} catch {
			notifications.add("Failed to send message.", "error");
		}
	}

	// ── Create / open conversation ────────────────────────────────────

	async function createOrOpenConversation(otherUserId) {
		const authStore = useAuthStore();
		if (!authStore.user) return null;

		const participants = [authStore.user.uid, otherUserId].sort();
		const sortedKey = participants.join("_");

		// Check for an existing conversation
		const q = query(
			collection(db, "conversations"),
			where("participantsSorted", "==", sortedKey),
		);
		const snap = await getDocs(q);
		if (!snap.empty) return snap.docs[0].id;

		// Fetch the other user's profile
		const otherSnap = await getDoc(doc(db, "users", otherUserId));
		const otherUser = otherSnap.data() ?? {
			uid: otherUserId,
			displayName: "User",
			photoURL: null,
		};

		const convRef = await addDoc(collection(db, "conversations"), {
			participants,
			participantsSorted: sortedKey,
			participantDetails: {
				[authStore.user.uid]: {
					uid: authStore.user.uid,
					displayName: authStore.displayName,
					photoURL: authStore.photoURL,
				},
				[otherUserId]: {
					uid: otherUserId,
					displayName: otherUser.displayName,
					photoURL: otherUser.photoURL ?? null,
				},
			},
			lastMessage: "",
			lastMessageBinary: "",
			updatedAt: serverTimestamp(),
			createdAt: serverTimestamp(),
		});

		return convRef.id;
	}

	// ── User search ───────────────────────────────────────────────────

	async function searchUsers(queryStr) {
		const authStore = useAuthStore();
		if (!queryStr.trim()) {
			userSearchResults.value = [];
			return [];
		}

		const snap = await getDocs(collection(db, "users"));
		const lower = queryStr.toLowerCase();

		const results = snap.docs
			.map((d) => d.data())
			.filter(
				(u) =>
					u.uid !== authStore.user?.uid &&
					u.uid !== BOT_UID &&
					!u.isBot &&
					(u.displayName?.toLowerCase().includes(lower) ||
						u.email?.toLowerCase().includes(lower)),
			);

		userSearchResults.value = results;
		return results;
	}

	function clearUserSearch() {
		userSearchResults.value = [];
	}

	// ── Bot reply ─────────────────────────────────────────────────────

	async function _sendBotReply(conversationId) {
		const reply = _BOT_REPLIES[Math.floor(Math.random() * _BOT_REPLIES.length)];
		try {
			await addDoc(
				collection(db, "conversations", conversationId, "messages"),
				{
					senderId: BOT_UID,
					senderName: "BinarySync Bot",
					binary: reply.binary,
					text: reply.text,
					translatedText: null,
					language: "en",
					timestamp: serverTimestamp(),
				},
			);
			await updateDoc(doc(db, "conversations", conversationId), {
				lastMessage: reply.text,
				lastMessageBinary: reply.binary,
				updatedAt: serverTimestamp(),
			});
		} catch {
			// silent — bot replies are best-effort
		}
	}

	return {
		conversations,
		activeConversationId,
		messages,
		userSearchResults,
		loadingMessages,
		activeConversation,
		listenToConversations,
		stopListeningToConversations,
		listenToMessages,
		stopListeningToMessages,
		sendMessage,
		createOrOpenConversation,
		searchUsers,
		clearUserSearch,
	};
});
