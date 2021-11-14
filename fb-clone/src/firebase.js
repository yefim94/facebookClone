import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth()
const provider = new GoogleAuthProvider();

export { auth, provider, db };
