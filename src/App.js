import db from "./sources/firebase.js";
import "./App.scss";
import Navbar from "./components/molecules/navbar/Navbar.js";
import Trip from "./components/molecules/trip/Trip.js";
//import Add from "./components/molecules/add/Add.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import firebase from "firebase/app";
import { doc, setDoc } from "firebase/firestore";

async function App() {
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
  const app = initializeApp(config);
  const db = getFirestore(app);

  await setDoc(doc(db, "Turer", "Ny tur"), {
    Tittel: "test",
    Beskrivelse: "hefra til dit",
  });

  //const db2 = firebase.firestore();

  return (
    <>
      <p>test2</p>
      <div className="App">
        <p>test</p>
        <Navbar></Navbar>
        <Trip></Trip>
      </div>
    </>
  );
}

export default App;
