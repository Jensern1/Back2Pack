import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { addTrip } from "./sources/firebase.js";
import "./App.scss";
import Navbar from "./components/molecules/navbar/Navbar.js";
import Trip from "./components/molecules/trip/Trip.js";
import Feed from "./components/molecules/feed/Feed.js";
import AddBtn from "./components/atoms/addBtn/AddBtn.js";
import NewTripForm from "./components/molecules/newTripForm/NewTripForm.js";

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

function GetFromFirestore(collectionTrips) {
  
}

function App() {
  const [turer, setTurer] = useState([]);

  useEffect(() => {
    getDocs(collectionTrips)
      .then((snapshot) => {
        const tripsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTurer(tripsData);
        //console.log(tripsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //const [trips, setTrips] = useState(turer);
  const [showNewTripForm, setShowNewTripForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddTrip = () => {
    getDocs(collectionTrips)
      .then((snapshot) => {
        const tripsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTurer(tripsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <Navbar onAddTrip={() => setShowNewTripForm(true)}>
        <AddBtn />
      </Navbar>
      <Feed trips={turer} />
      {showNewTripForm && (
        <NewTripForm
          onClose={() => setShowNewTripForm(false)}
          onAddTrip={() => handleAddTrip()}

        />
      )}
      {selectedImage &&
        selectedImage.username &&
        selectedImage.tripName &&
        selectedImage.description &&
        selectedImage.image &&
        selectedImage.price &&
        selectedImage.length &&
        selectedImage.rating && (
          <Trip
            username={selectedImage.username}
            tripName={selectedImage.tripName}
            image={selectedImage.image}
            description={selectedImage.description}
            price={selectedImage.price}
            length={selectedImage.length}
            rating={selectedImage.rating}
          />
        )}
    </div>
  );
}

export default App;
