import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDwX5eAJgaOnZWVoNmtvRil4nZa7CwWRIk",
  authDomain: "user-profiles-566ca.firebaseapp.com",
  projectId: "user-profiles-566ca",
  storageBucket: "user-profiles-566ca.appspot.com",
  messagingSenderId: "815014356251",
  appId: "1:815014356251:web:5a72c8bceab49de95bdfbe",
  measurementId: "G-YG3RPRMG4X"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);