import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function App({ Component, pageProps }) {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDlZKT-DZFkOBFf-6GDPG3IG5zuFE04mCE",
    authDomain: "task-fe833.firebaseapp.com",
    projectId: "task-fe833",
    storageBucket: "task-fe833.appspot.com",
    messagingSenderId: "849414883500",
    appId: "1:849414883500:web:2199c6feddf4c7d48ff709",
    measurementId: "G-5CV2Q2RVS7",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  return <Component {...pageProps} />;
}
