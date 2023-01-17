import React, { useContext } from 'react'
import './confirmPage.css'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../App'
import { FiArrowLeft } from "react-icons/fi";
import { MdFavorite} from 'react-icons/md'
import { AiTwotoneEdit} from 'react-icons/ai'
import { AiFillCopy} from 'react-icons/ai'
import { AiFillDelete} from 'react-icons/ai'

const ConfirmPage = () => {
  const { info, name, shipPoint, createdBy, windcode } = useContext(AppContext)

  const handleSubmit = () => {

    let options = JSON.parse(localStorage.getItem('activeOptions') || '[]')
    let option = {
      info, name, shipPoint, createdBy, windcode
    }

    options.push(option)

    window.localStorage.setItem('activeOptions', JSON.stringify(options))
    Navigate('/')
  }
 
  const Navigate = useNavigate()
  return (
    <>
      <div className='createDoorNav pt-4'>
        <h5 onClick={() => Navigate(-1)} className='d-flex  align-items-center'><FiArrowLeft style={{cursor:'pointer'}} className='mx-4'/> {createdBy }   </h5>
      </div>

      <Container >

        <Container className='shadow mt-5 pt-3'>
          <h4 className='Headline'>10' 0" X 10' 0.0" CA211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE,5TH GENERATION FINISH WALDER DOOR</h4>
          <div>
            <small>Job NAME: Front door with glass</small><br />
            <small>Product #CWD  Garage Door</small><br />
            <small>Availability: <span>IN STOCK</span><span>(Available for Pickup)</span></small><br />
          </div>
          <div className='count'>
            <div >
              <Button variant='light' bg-light className='m-3 '>-</Button>
              <Button variant='outline-dark' className='m-3 px-4 '>1</Button>
              <Button variant='light' bg-light className='m-3 '>+</Button>
            </div>
            <div className='d-flex justify-content-between w-50 firstBox'>
            <div className='text-center'style={{color:"green"}} >
              <span>Standard Multiplier: 432</span><br />
              <span>Standard Multiplier Applied</span>
              <p style={{color:"brown"}}>Apply MPQ</p>
            </div>
            <div>
              <small>Net Price: <span>$4500.00</span></small><br />
              <small>Unit Price: $4800.00</small><br />
              <small>View Price Details</small>
            </div>
            </div>
          </div>

          <div className='button' style={{ paddingBottom: '1rem' }}>
            <Button variant='light'   className='lastPageBtn'>
             <MdFavorite/> FAVORITES
            </Button>
            <Button variant='light' className='lastPageBtn' onClick={()=>Navigate(-1)} >
              <AiTwotoneEdit/> EDIT
            </Button>
            <Button variant='light' className='lastPageBtn'>
             <AiFillCopy/> COPY
            </Button>
            <Button variant='light' className='lastPageBtn' onClick={()=>Navigate('/')} >
              <AiFillDelete/> DELETE
            </Button>
          </div>

        </Container>
        <Container className='shadow my-5 p-4 d-flex gap-4 justify-content-between secondBox'>

          <div>
            <Form.Group className="mb-3 shadow p-4" controlId="formBasicEmail">
              <Form.Label>Change Deliver Date</Form.Label>
              <Form.Control type="date" placeholder="Example: 31-DEC-1999" />
              <Form.Text className="text-muted ">
                <small >Standard Delivery, Tue May 28 - 2019</small>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 shadow p-4" controlId="formBasicEmail">
              <Form.Label>Purchase Order Number</Form.Label>
              <Form.Control type="number" placeholder="Enter PO number" />
              <Form.Text className="text-muted">
                <small >The PO will be useful to track this order item</small>
              </Form.Text>
            </Form.Group>
          </div>
          <div>
            <Row>
              <Col>SubTotal</Col>
              <Col className='text-center'>$4500</Col>
            </Row>
            <Row>
              <Col>Energy SubCharge</Col>
              <Col className='text-center'>$78.00</Col>
            </Row>
            <Row>
              <Col>Sales Tax</Col>
              <Col className='text-center'>$490.93</Col>
            </Row>
            <Row>
              <Col>TOTAL</Col>
              <Col className='text-center'>$5061.11</Col>
            </Row>
            <hr />
           <input type='checkbox' name="tax" className='mx-3'/> <span style={{color:"brown", fontSize:"1.4rem"}}>Apply Tax</span>
           <p>( The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details. )</p>

          </div>
        </Container>

        <Container className='my-3 d-flex justify-content-between shadow' >
          <div>
            <small>
              1 ITEM
            </small>
            <h3>$5061.11</h3>
          </div>
          <div className='my-3'>
          <Button variant='light' bg-light className='mx-3' style={{ color: 'brown', border: '2px solid brown' }} onClick={()=>Navigate('/createDoorPage')} >
            Add MORE+
          </Button>
          <Button style={{ color: 'white', border: 'none', backgroundColor: 'brown' }} onClick={handleSubmit}>
            PLACE ORDER
          </Button>
          </div>
        </Container>

      </Container>

    </>
  )
}

export default ConfirmPage