import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCtotcdqOgNLvch6svfRpsUBfz0yd8WDpE",
	authDomain: "test-project-10bfb.firebaseapp.com",
	projectId: "test-project-10bfb",
	storageBucket: "test-project-10bfb.firebasestorage.app",
	messagingSenderId: "471056601614",
	appId: "1:471056601614:web:5ed9cf598141a66b8e225f",
	measurementId: "G-4ZQ4HNGHER",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
