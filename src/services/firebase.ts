import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "stick-8eb8f.firebaseapp.com",
  projectId: "stick-8eb8f",
  storageBucket: "stick-8eb8f.appspot.com",
  messagingSenderId: "242192878481",
  appId: "1:242192878481:web:43328db258b96514f22830",
  measurementId: "G-KG12JJNP8M",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
