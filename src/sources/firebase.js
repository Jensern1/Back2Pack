// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPHhZjnX7r2RXODrTjB47cNh2RIGIJnbg',
  authDomain: 'pu-backpakking.firebaseapp.com',
  projectId: 'pu-backpakking',
  storageBucket: 'pu-backpakking.appspot.com',
  messagingSenderId: '634044469514',
  appId: '1:634044469514:web:fdeca9d99765d2d4f8eaf3',
  measurementId: 'G-YG9HM34W3G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
