import ActiveCarts from './ActiveCarts/ActiveCarts';
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