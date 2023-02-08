import firebase from './sources/firebase.js';
import './App.scss';
import Navbar from './components/molecules/navbar/Navbar.js';
import Trip from './components/molecules/trip/Trip.js';
import Add from './components/molecules/add/Add.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Trip></Trip>
    </div>
  );
}

export default App;
