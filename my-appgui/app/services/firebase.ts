// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJXFQi84bxMZeej2eDCvpkFmE-sPA4Rbw",
  authDomain: "fatec-react-native.firebaseapp.com",
  projectId: "fatec-react-native",
  storageBucket: "fatec-react-native.appspot.com",
  messagingSenderId: "1089942767739",
  appId: "1:1089942767739:web:4131701a28483789b6bade",
  measurementId: "G-GZXERLX77L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp