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
import image1 from "./assets/mountain.jpg";
import image2 from "./assets/beach.jpg";
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
        console.log(turer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collectionTrips, (snapshot) => {
  //     const tripsData = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setTurer(tripsData);
  //   });
  //   return () => unsubscribe();
  // }, []);

  const trips1 = [
    {
      username: "John Doe",
      tripName: "Hiking in the Mountains",
      image: image1,
      description:
        "I had a great time hiking in the mountains. The views were breathtaking!",
      price: 100,
      length: 5,
      rating: 4,
    },
    {
      username: "Jane Doe",
      tripName: "Beach Vacation",
      image: image2,
      description:
        "My beach vacation was amazing! I loved swimming in the ocean and relaxing on the beach.",
      price: 200,
      length: 7,
      rating: 5,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrip(event.target);

    event.target.reset();
  };

  const [trips, setTrips] = useState(turer);
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
      <Navbar onAddTrip={() => setShowNewTripForm(true)}>
        <AddBtn />
      </Navbar>
      <Feed trips={turer} />
      {showNewTripForm && (
        <NewTripForm
          onClose={() => setShowNewTripForm(false)}
          onAddTrip={handleAddTrip}
          // setSelectedImage={setSelectedImage}
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
