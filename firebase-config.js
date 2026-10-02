import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, set, get, update, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKHyL95NbRcLVFX9YdN9HZxUZV3-PoUWA",
  authDomain: "math-escape-room-d480b.firebaseapp.com",
  databaseURL: "https://math-escape-room-d480b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "math-escape-room-d480b",
  storageBucket: "math-escape-room-d480b.firebasestorage.app",
  messagingSenderId: "251228908862",
  appId: "1:251228908862:web:25ce88b9668d5f86bfd06f"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, onValue, set, get, update, remove };
