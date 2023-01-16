import React from 'react'
import { Navbar, Button, Container, Form, Nav } from 'react-bootstrap';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ActiveCarts from './ActiveCarts/ActiveCarts';
import ArchivedCarts from './ArchivedCarts';

const CartNav = () => {
  return (
    <Container fluid>
    <Navbar bg="light" expand="lg">
      <Container fluid className=''>

        <div>
          <Navbar.Brand><NavLink to='/active'>Active Carts</NavLink></Navbar.Brand>
          <Navbar.Brand><NavLink to='archived'>Archived Carts</NavLink></Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Filter</Button>
          </Form>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  </Container>
  
  )
}

export default CartNav