import React from 'react'
import './createDoorPage.css'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { FiArrowLeft } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const CreateDoorPage = () => {
  const Navigate = useNavigate()
  return (
    <>
      <div className='createDoorNav pt-4'>
        <h5 onClick={() => Navigate(-1)} className='d-flex  align-items-center'><FiArrowLeft className='mx-4' style={{cursor:'pointer'}}/> Creat a new door  </h5>
      </div>
      <Container className='mt-5 mb-5'>
        <Container fluid onClick={() => Navigate('/configurePage')} className='tablets-list shadow m-2 p-4 pb-4 py-3 d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h4 className='my-3'>Configure your door from scratch</h4>
            <p style={{color:"grey"}}>Residential, Commerical, Entry doors</p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </Container>

        <Container fluid className='tablets-list shadow m-2 p-4 pb-4 py-3 d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h4 className='my-3'>Parts / Openers</h4>
            <p style={{color:"grey"}}>Order Parts and Openers</p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </Container>
        
        <Container fluid className='tablets-list shadow m-2 p-4 pb-4 py-3 d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h4 className='my-3'>Direct Item Entry</h4>
            <p style={{color:"grey"}}>Order Parts / Openers using a Product ID</p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </Container>

        <Container fluid className='tablets-list shadow m-2 p-4 pb-4 py-3 d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h4 className='my-3'>Choose from favourites</h4>
            <p style={{color:"grey"}}>Re-order door from your favourites </p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </Container>

        

      

      </Container>
    </>
  )
}

export default CreateDoorPage