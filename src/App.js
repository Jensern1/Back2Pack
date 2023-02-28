import React, { useState } from 'react';
import { db, addTrip } from "./sources/firebase.js";
import "./App.scss";
import Navbar from "./components/molecules/navbar/Navbar.js";
import Trip from "./components/molecules/trip/Trip.js";
import Feed from "./components/molecules/feed/Feed.js";
import AddBtn from "./components/atoms/addBtn/AddBtn.js";
import image1 from "./assets/mountain.jpg";
import image2 from "./assets/beach.jpg";
import NewTripForm from "./components/molecules/newTripForm/NewTripForm.js"


//import Add from "./components/molecules/add/Add.js";
//import { initializeApp } from "firebase/app";
//import { getFirestore, collection, getDocs } from "firebase/firestore";
//import firebase from "firebase/app";
//import { doc, setDoc } from "firebase/firestore";

function App() {
  console.log("test");

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
  //const app = initializeApp(config);
  //const db = getFirestore(app);

  // collection ref
  //const collectionTrips = collection(db, "Turer");

  // get collection data
  const trips1 = [
    {
      username: "John Doe",
      tripName: "Hiking in the Mountains",
      image: image1,
      description:
        "I had a great time hiking in the mountains. The views were breathtaking!",
    },
    {
      username: "Jane Doe",
      tripName: "Beach Vacation",
      image: image2,
      description:
        "My beach vacation was amazing! I loved swimming in the ocean and relaxing on the beach.",
    },
    {
      username: "Jane Doe",
      tripName: "Beach Vacation",
      image: image2,
      description:
        "My beach vacation was amazing! I loved swimming in the ocean and relaxing on the beach.",
    },
    {
      username: "Jane Doe",
      tripName: "Beach Vacation",
      image: image2,
      description:
        "My beach vacation was amazing! I loved swimming in the ocean and relaxing on the beach.",
    },
    {
      username: "Jane Doe",
      tripName: "Beach Vacation",
      image: image2,
      description:
        "My beach vacation was amazing! I loved swimming in the ocean and relaxing on the beach.",
    },
    {
      username: "Jane Doe",
      tripName: "Beach Vacation",
      image: image2,
      description:
        "My beach vacation was amazing! I loved swimming in the ocean and relaxing on the beach.",
    },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    addTrip(event.target);

    event.target.reset();
  };

  const [trips, setTrips] = useState(trips1);
  const [showNewTripForm, setShowNewTripForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddTrip = (newTrip) => {
     // Create a temporary URL for the new trip image
  const imageUrl = URL.createObjectURL(newTrip.image);

  // Add the new trip to the trips array
  setTrips([...trips, { ...newTrip, image: imageUrl }]);

  // Set the selected image to the new trip image
  setSelectedImage({ ...newTrip, image: imageUrl });
  setTimeout(() => setSelectedImage(null), 10); // clear selectedImage after 500ms
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Feed trips={trips} />
      <AddBtn onClick={() => setShowNewTripForm(true)} />
      {showNewTripForm && <NewTripForm onClose={() => setShowNewTripForm(false)} onAddTrip={handleAddTrip} />}
      {selectedImage && selectedImage.username && selectedImage.tripName && selectedImage.description && selectedImage.image && 
        <Trip username={selectedImage.username} tripName={selectedImage.tripName} image={selectedImage.image} description={selectedImage.description} />
      }
    </div>
  );
}

export default App;

