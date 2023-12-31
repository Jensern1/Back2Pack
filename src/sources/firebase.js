import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
const collectionTrips = collection(db, 'Turer');

function addTrip(data) {
  if (data) {
    addDoc(collectionTrips, {
      userID: data.userID,
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

function addUser(data) {
  if (data) {
    addDoc(collectionTrips, {
      userID: data.uid,
      username: data.username,
      email: data.email,
    });
  }
}

export const auth = getAuth(app);
export { addTrip, db, addUser };
export default db;
