import React, {useContext, useState} from 'react'
import { Container } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import './carts.css'
import { AppContext } from '../../../App';


const Carts = () => {

  const {setSearchTerm} = useContext(AppContext)
  return (
    <>
      <Container fluid className='p-3' style={{display:'flex', justifyContent:'space-between'}}>
        <div className='cartLink'>
          <NavLink exact to='/'  >Active Carts</NavLink>
          <NavLink to='archived'  >Archived Carts</NavLink>
        </div>
          <input type='text' className='search' placeholder='Search By Info' onChange={(e)=> setSearchTerm(e.target.value)}/>
      </Container>
      <Outlet />
    </>
  )
}

export default Carts