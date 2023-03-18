import React, { useEffect, useState, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import "../../App.scss";
import Navbar from "../../components/molecules/navbar/Navbar.js";
import Trip from "../../components/molecules/trip/Trip.js";
import Feed from "../../components/molecules/feed/Feed.js";
import AddBtn from "../../components/atoms/addBtn/AddBtn.js";
import SortBtn from "../../components/atoms/sortBtn/SortBtn.js";
import NewTripForm from "../../components/molecules/newTripForm/NewTripForm.js";


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
const collectionUsers = collection(db, "bruker");

function Home() {
  const [originalTurer, setOriginalTurer] = useState([]);
  const [turer, setTurer] = useState([]);
  const [brukere, setBrukere] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState(0);


  useEffect(() => {
    getDocs(collectionTrips)
      .then((snapshot) => {
        const tripsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOriginalTurer(tripsData);
        setTurer(tripsData);
      })
      .catch((err) => {
        console.log(err.message);
      });

    getDocs(collectionUsers)
      .then((snapshot) => {
        const brukerData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBrukere(brukerData);
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

  const handleDeleteTrip = async (tripId) => {
    try {
      const tripRef = doc(db, "Turer", tripId);
      await deleteDoc(tripRef);

      // Update the state after deleting the trip
      setOriginalTurer(originalTurer.filter((trip) => trip.id !== tripId));
      setTurer(turer.filter((trip) => trip.id !== tripId));

    } catch (err) {
      console.log("Error deleting trip:", err);
    }
  };

  const handleSearch = (input) => {
    setSearchInput(input);

    if (input.length == 0) {
      setTurer(originalTurer);
    }
    if (input.length > 0) {
      const filteredTrips = turer.filter((trip) => {
        if (
          trip.tripName.toLowerCase().includes(input.toLowerCase()) ||
          trip.username.toLowerCase().includes(input.toLowerCase()) ||
          trip.description.toLowerCase().includes(input.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      setTurer(filteredTrips);
    }
  };

  function compareByASCPrice(trip1, trip2) {
    return trip1.price - trip2.price;
  }

  function compareByDESCPrice(trip1, trip2) {
    return trip2.price - trip1.price;
  }

  function compareByASCRating(trip1, trip2) {
    return trip1.rating - trip2.rating;
  }

  function compareByDESCRating(trip1, trip2) {
    return trip2.rating - trip1.rating;
  }

  const handleSort = (sortType) => {
    let sortedTurer = [];
    if (sortType == 1) {
      sortedTurer = [...turer].sort(compareByASCPrice);
    } else if (sortType == 2) {
      sortedTurer = [...turer].sort(compareByDESCPrice);
    } else if (sortType == 3) {
      sortedTurer = [...turer].sort(compareByASCRating);
    } else if (sortType == 4) {
      sortedTurer = [...turer].sort(compareByDESCRating);
    }
    setSortType(sortType);
    setTurer(sortedTurer);
  };

  return (
    <div className="App">
      <Navbar
        onAddTrip={() => setShowNewTripForm(true)}
        searchInput={searchInput}
        handleSearch={handleSearch}
      >
        <AddBtn />
      </Navbar>
      <SortBtn setSortTypeApp={handleSort}></SortBtn>
      <Feed trips={turer} onDelete={handleDeleteTrip} />
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

export default Home;