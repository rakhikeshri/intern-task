import Carts from './components/Home/Carts/Carts'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import HomeNav from './Component/HomeNav';
import ActiveCarts from './Component/Carts/ActiveCarts/ActiveCarts';
import ArchivedCarts from './Component/Carts/ArchivedCarts';
import Favorites from './Component/Favorites/Favorites';
import CreateDoorPage from './Component/Carts/CreateDoorPage/CreateDoorPage';
import ConfigureNewDoor from './Component/Carts/ConfigureNewDoor/ConfigureNewDoor';
import ConfigurePage from './Component/Carts/ConfigurePage/ConfigurePage';


function App() {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
