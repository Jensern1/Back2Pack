import firebase from './sources/firebase.js';
import './App.scss';
import Navbar from './components/molecules/navbar/Navbar.js';
import AddBtn from './components/molecules/addBtn/AddBtn.js';
import Trip from './components/molecules/trip/Trip.js';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Trip></Trip>
      <AddBtn></AddBtn>
    </div>
  );
}

export default App;
