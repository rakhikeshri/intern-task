
import { NavLink, Route, Routes } from 'react-router-dom';
import ActiveCarts from './ActiveCarts/ActiveCarts';
import ArchivedCarts from './ArchivedCarts';
import CartNav from './CartNav'

function Cart() {
  return (
    <>
      <CartNav />
      {/* <Routes>
        <Route exact path='/active' element={<ActiveCarts/>} />
        <Route exact path='/archived' element={<ArchivedCarts/>} />
      </Routes> */}



      <ActiveCarts />
    </>
  );
}

export default Cart;