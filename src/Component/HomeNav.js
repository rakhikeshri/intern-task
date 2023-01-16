import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Home.css'

const HomeNav = () => {
    return (
        <Container fluid className='bg-dark d-flex' style={{alignItems:'center', justifyContent:'center'}}>
            <div style={{display:'flex'}}>
                <NavLink to="/carts" className='links'>
                    <h2>CARTS</h2>
                </NavLink>
                <NavLink to="/fav" className='links'>
                    <h2>FAVORITES</h2>
                </NavLink>
            </div>
        </Container>
    )
}

export default HomeNav