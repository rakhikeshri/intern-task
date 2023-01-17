import React from 'react'
import HomeNav from './HomeNav'
import { Routes, Route } from "react-router-dom";
import Carts from './Carts/Carts'
import CreateDoorPage from './Carts/CreateDoorPage/CreateDoorPage'
import ConfigurePage from './Carts/ConfigurePage/ConfigurePage'
import ConfigureNewDoor from './Carts/ConfigureNewDoor/ConfigureNewDoor'
import ConfirmPage from './Carts/ConfirmPage/ConfirmPage'
import Favorites from './Favorites/Favorites'

const Home = () => {
  return (
    <>
      <HomeNav />
    <Routes>
      <Route exact path="/carts" element={<Carts />} />
      <Route exact path="/createDoorPage" element={<CreateDoorPage />} />
      <Route exact path="/configurePage" element={<ConfigurePage />} />
      <Route exact path="/configureNewDoor" element={<ConfigureNewDoor />} />
      <Route exact path="/confirmPage" element={<ConfirmPage />} />
      <Route exact path="/fav" element={<Favorites />} />
    </Routes>
    </>
  )
}

export default Home