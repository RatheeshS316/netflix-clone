// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPC-Y1ODgjl9qr9NHCAf7aQGmMGNQ3kz4",
  authDomain: "netflix-clone-828e7.firebaseapp.com",
  projectId: "netflix-clone-828e7",
  storageBucket: "netflix-clone-828e7.firebasestorage.app",
  messagingSenderId: "715343678166",
  appId: "1:715343678166:web:8b6f29e8e8f1a3089ed777",
  measurementId: "G-T6X874MP0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firebase Authentication and Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;
