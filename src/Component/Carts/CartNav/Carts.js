import React from 'react'
import { Navbar, Button, Container, Form, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import './carts.css'

const Carts = () => {
  return (
    <>
      <Container fluid className='p-3' style={{display:'flex', justifyContent:'space-between'}}>
        <div className='cartLink'>
          <NavLink to='/'>Active Carts</NavLink>
          <NavLink to='archived'>Archived Carts</NavLink>
        </div>
          <input type='text' placeholder='Search By Name' />
      </Container>
      <Outlet />
    </>
  )
}

export default Carts