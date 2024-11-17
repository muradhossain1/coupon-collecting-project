// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC_jAqDKemLBfhG8nuYLMVk-ds4piT4rg",
  authDomain: "my-assignment-9-2f295.firebaseapp.com",
  projectId: "my-assignment-9-2f295",
  storageBucket: "my-assignment-9-2f295.firebasestorage.app",
  messagingSenderId: "95006808410",
  appId: "1:95006808410:web:83798416e13afd3323fb63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;