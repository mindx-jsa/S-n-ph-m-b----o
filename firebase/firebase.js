// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_rR1vWEkB5eXhOqYjUcVK4MiCT7wgfwU",
  authDomain: "spck-1c640.firebaseapp.com",
  projectId: "spck-1c640",
  storageBucket: "spck-1c640.appspot.com",
  messagingSenderId: "666103702490",
  appId: "1:666103702490:web:547dfad02c67be8fbb96e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };