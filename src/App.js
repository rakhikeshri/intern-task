import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeNav from './Component/HomeNav';
import Carts from './Component/Carts/CartNav/Carts';
import ActiveCarts from './Component/Carts/ActiveCarts/ActiveCarts';
import ArchivedCarts from './Component/Carts/ArchivedCarts';
import Favorites from './Component/Favorites/Favorites';
import ConfigureNewDoor from './Component/Carts/ConfigureNewDoor/ConfigureNewDoor';
import CreateDoorPage from './Component/Carts/CreateDoorPage/CreateDoorPage';
import ConfigurePage from './Component/Carts/ConfigurePage/ConfigurePage';
import ConfirmPage from './Component/Carts/ConfirmPage/ConfirmPage';
import { createContext, useState } from "react";

export const AppContext = createContext()

function App() {

  const [info, setInfo] = useState('')
  const [name, setName] = useState('')
  const [shipPoint, setShipPoint] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [windcode, setWindcode] = useState('')
  
  const [searchTerm, setSearchTerm] = useState('')
  

  return (
    <div>
      <Router>
      <AppContext.Provider value={{ info, setInfo, name, setName, shipPoint, setShipPoint, createdBy, setCreatedBy, windcode, setWindcode, searchTerm, setSearchTerm }}>
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
          </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
