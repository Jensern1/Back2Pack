import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBPHhZjnX7r2RXODrTjB47cNh2RIGIJnbg",
  authDomain: "pu-backpakking.firebaseapp.com",
  projectId: "pu-backpakking",
  storageBucket: "pu-backpakking.appspot.com",
  messagingSenderId: "634044469514",
  appId: "1:634044469514:web:fdeca9d99765d2d4f8eaf3",
  measurementId: "G-YG9HM34W3G",
};

const app = initializeApp(config);
const db = getFirestore(app);
const collectionTrips = collection(db, "Turer");

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

function addTrip(data) {
  if (data) {
    // console.log("testprint");
    // console.log(data);
    addDoc(collectionTrips, {
      username: data.username,
      tripName: data.tripName,
      image: data.image,
      description: data.description,
      price: data.price,
      length: data.length,
      rating: data.rating,
    });
  }
}

export { addTrip, db };
export default db;
