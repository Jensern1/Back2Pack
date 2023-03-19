import './App.scss';
import React, { useContext, useState, useEffect } from 'react';
import Auth from './pages/Auth';
import Home from './pages/Home';
import User from './pages/User';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";

function App() {
  const { isLoggedIn } = useContext(UserContext);
  const [turer, setTurer] = useState([]);

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

  useEffect(() => {
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
  }, []);

  return (
    <Router>
      <div>
        <section>
          <Routes>
            {isLoggedIn === true ? (
              <>
                <Route path='/' element={<Home turer={turer} setTurer={setTurer} />} />
                <Route path='/user' element={<User turer={turer} setTurer={setTurer} />} />
                <Route path='/*' element={<NotFound />} />
              </>
            ) : (
              <>
                <Route path='/*' element={<Auth />} />
              </>
            )}
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
