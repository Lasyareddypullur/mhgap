import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-s3YZGP49eUhVEUgl3Oc1YHTvBlyVB5w",
  authDomain: "myapp-a1831.firebaseapp.com",
  projectId: "myapp-a1831",
  storageBucket: "myapp-a1831.appspot.com",
  messagingSenderId: "819512463450",
  appId: "1:819512463450:web:d8f97f0a053d06b3a10863",
  measurementId: "G-JYL2FGT8YT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };
