import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Register } from "../components/RegisterForm";

const firebaseConfig = {
  apiKey: "AIzaSyAJISsh6MhFKsL3TH3ThH-98U9NBJkXMbw",
  authDomain: "raxs-chat-app.firebaseapp.com",
  projectId: "raxs-chat-app",
  storageBucket: "raxs-chat-app.firebasestorage.app",
  messagingSenderId: "861393007081",
  appId: "1:861393007081:web:79a5868c96098e7b959b78",
  measurementId: "G-WR7RLX9C6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async ({
  firstName,
  lastName,
  phone,
  email,
  password,
}: Register) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      email,
      firstname: "",
      lastname: "",
      phone: "",
      avatar: "",
      bio: "Hey there i am using raxs app",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code);
  }
};

export { signup, login };
