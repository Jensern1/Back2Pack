import { db, addTrip } from "./sources/firebase.js";
import "./App.scss";
import Navbar from "./components/molecules/navbar/Navbar.js";
import Trip from "./components/molecules/trip/Trip.js";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrip(event.target);

    event.target.reset();
  };

  return (
    <>
      <p>test2</p>
      <div className="App">
        <p>test</p>
        <Navbar></Navbar>
        <Trip></Trip>
        <h2> Add Trip</h2>
        <form className="Add" onSubmit={handleSubmit}>
          <label htmlFor="title">Tittel:</label>
          <input type="text" name="Tittel" required></input>
          <label htmlFor="description"> Beskrivelse:</label>
          <input type="text" name="Beskrivelse" required></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
