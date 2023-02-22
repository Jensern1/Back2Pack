// import logo from "./logo.svg";
// import firebase from "./sources/firebase.js";
// import "./App.scss";
// import Navbar from "./components/molecules/navbar/Navbar.js";
import Trip from "./components/molecules/trip/Trip.js";
import Feed from "./components/molecules/feed/Feed.js";

// function App() {
//   return (
//     <div className="App">
//       <Navbar></Navbar>
//       <Feed></Feed>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import Feed from "./Feed";
import image1 from "./assets/mountain.jpg";
import image2 from "./assets/beach.jpg";

function App() {
  const trips = [
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

  return (
    <div>
      <Feed trips={trips} />
    </div>
  );
}

export default App;

