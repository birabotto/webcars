import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMA6_Xu0CNo9scQGkBYFGnMxQdqe8tQTQ",
  authDomain: "webcars-3f28c.firebaseapp.com",
  projectId: "webcars-3f28c",
  storageBucket: "webcars-3f28c.appspot.com",
  messagingSenderId: "385043489775",
  appId: "1:385043489775:web:b4f3058436ed5e39fdcc1a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
