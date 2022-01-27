import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5MPdYbJvvT3ZJewoonjmPishPkpTcIhw",
  authDomain: "react-61d36.firebaseapp.com",
  projectId: "react-61d36",
  storageBucket: "react-61d36.appspot.com",
  messagingSenderId: "581689868133",
  appId: "1:581689868133:web:c17a5969db10ddb8d32b8c",
  measurementId: "G-W6M81JQJQ6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
