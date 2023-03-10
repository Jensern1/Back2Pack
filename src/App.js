import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./App.scss";
import Navbar from "./components/molecules/navbar/Navbar.js";
import Trip from "./components/molecules/trip/Trip.js";
import Feed from "./components/molecules/feed/Feed.js";
import AddBtn from "./components/atoms/addBtn/AddBtn.js";
import image1 from "./assets/mountain.jpg";
import image2 from "./assets/beach.jpg";
import NewTripForm from "./components/molecules/newTripForm/NewTripForm.js"

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

function App() {
  const [turer, setTurer] = useState([]);

  useEffect(() => {
    getDocs(collectionTrips).then((snapshot) => {
      const tripsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTurer(tripsData);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);

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
  ];

  const [trips, setTrips] = useState(turer);
  const [showNewTripForm, setShowNewTripForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddTrip = (newTrip) => {
    const imageUrl = URL.createObjectURL(newTrip.image);
    setTrips([...trips, { ...newTrip, image: imageUrl }]);
    setSelectedImage({ ...newTrip, image: imageUrl });
    setTimeout(() => setSelectedImage(null), 10);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Feed trips={turer} />
      <AddBtn onClick={() => setShowNewTripForm(true)} />
      {showNewTripForm && <NewTripForm onClose={() => setShowNewTripForm(false)} onAddTrip={handleAddTrip} />}
      {selectedImage && selectedImage.username && selectedImage.tripName && selectedImage.description && selectedImage.image && 
        <Trip username={selectedImage.username} tripName={selectedImage.tripName} image={selectedImage.image} description={selectedImage.description} />
      }
    </div>
  );
}

export default App;
