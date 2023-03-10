// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBPHhZjnX7r2RXODrTjB47cNh2RIGIJnbg",
  authDomain: "pu-backpakking.firebaseapp.com",
  projectId: "pu-backpakking",
  storageBucket: "pu-backpakking.appspot.com",
  messagingSenderId: "634044469514",
  appId: "1:634044469514:web:fdeca9d99765d2d4f8eaf3",
  measurementId: "G-YG9HM34W3G",
};

// Initialize Firebase
const app = initializeApp(config);

//init services
const db = getFirestore(app);

// collection ref
const collectionTrips = collection(db, "Turer");

// get collection data

// getDocs(collectionTrips)
//   .then((snapshot) => {
//     let turer = [];
//     snapshot.docs.forEach((doc) => {
//       turer.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(turer);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// add trip

function addTrip(data) {
  //const addTripForm = document.querySelector(".add");
  //e.preventDefault();

  if (data) {
    // console.log("testprint");
    // console.log(data);
    addDoc(collectionTrips, {
      tripName: data.tripName,
      description: data.description,
      image: data.image,
      username: data.username,
    });
  }
}

//export default firebase;
export { addTrip, db };
export default db;
