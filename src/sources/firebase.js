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

getDocs(collectionTrips)
  .then((snapshot) => {
    let turer = [];
    snapshot.docs.forEach((doc) => {
      turer.push({ ...doc.data(), id: doc.id });
    });
    console.log(turer);
  })
  .catch((err) => {
    console.log(err.message);
  });

function addTrip(data) {
  if (data) {
    addDoc(collectionTrips, {
      username: data.Username.value,
      tripName: data.Tittel.value,
      image: data.Image.value,
      description: data.Beskrivelse.value,
      price: data.Price.value,
      length: data.Length.value,
      rating: data.Rating.value,
    });
  }
}

export { addTrip, db };
export default db;
