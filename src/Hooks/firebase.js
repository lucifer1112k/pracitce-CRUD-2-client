import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9jntcc8SLK2ViafozKHRBF1sgCE8Uklc",
  authDomain: "practice-crud-944b9.firebaseapp.com",
  projectId: "practice-crud-944b9",
  storageBucket: "practice-crud-944b9.appspot.com",
  messagingSenderId: "1050527201816",
  appId: "1:1050527201816:web:dbda91ce95e2954e87616d",
};

// Initialize Firebase
const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuthentication;
