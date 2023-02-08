import logo from './logo.svg';
import firebase from './sources/firebase.js';
import './App.scss';
import Navbar from './components/molecules/navbar/Navbar.js';
import Trip from './components/molecules/trip/Trip.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Trip></Trip>
    </div>
  );
}

export default App;
