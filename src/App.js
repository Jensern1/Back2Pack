import { db, addTrip, auth } from './sources/firebase.js';
import './App.scss';
import React, { useState, useEffect } from 'react';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import User from 'pages/User';
import NotFound from 'pages/NotFound/index.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  const config = {
    apiKey: 'AIzaSyBPHhZjnX7r2RXODrTjB47cNh2RIGIJnbg',
    authDomain: 'pu-backpakking.firebaseapp.com',
    projectId: 'pu-backpakking',
    storageBucket: 'pu-backpakking.appspot.com',
    messagingSenderId: '634044469514',
    appId: '1:634044469514:web:fdeca9d99765d2d4f8eaf3',
    measurementId: 'G-YG9HM34W3G',
  };

  return (
    <Router>
      <div>
        <section>
          <Routes>
            {' '}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Auth />} />
            <Route path='/user' element={<User />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
