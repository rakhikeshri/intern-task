
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeNav from './Component/HomeNav';
// import Home from './Component/Home';
import Carts from './Component/Carts/CartNav/Carts';
import ActiveCarts from './Component/Carts/ActiveCarts/ActiveCarts';
import ArchivedCarts from './Component/Carts/ArchivedCarts';
import Favorites from './Component/Favorites/Favorites';
import ConfigureNewDoor from './Component/Carts/ConfigureNewDoor/ConfigureNewDoor';
import CreateDoorPage from './Component/Carts/CreateDoorPage/CreateDoorPage';
import ConfigurePage from './Component/Carts/ConfigurePage/ConfigurePage';
import ConfirmPage from './Component/Carts/ConfirmPage/ConfirmPage';

function App() {
  return (
    <div>
      <Router>
        {/* <Home /> */}
        <HomeNav />
        <Routes>
          <Route path='/' element={<Carts />}>
            <Route index element={<ActiveCarts />} />
            <Route path='/archived' element={<ArchivedCarts />} />
          </Route>
          <Route exact path="/createDoorPage" element={<CreateDoorPage />} />
          <Route exact path="/configurePage" element={<ConfigurePage />} />
          <Route exact path="/configureNewDoor" element={<ConfigureNewDoor />} />
          <Route exact path="/confirmPage" element={<ConfirmPage />} />
          <Route path='/fav' element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
