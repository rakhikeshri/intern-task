import React, { useState, useContext } from 'react'
import './configureNewDoor.css'
import { useNavigate } from 'react-router-dom'
import { Container, ProgressBar, Button, Card, Form, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../App'
import { FiArrowLeft } from "react-icons/fi";

const ConfigureNewDoor = () => {

  const { info, setInfo, name, setName, shipPoint, setShipPoint, createdBy, setCreatedBy, windcode, setWindcode } = useContext(AppContext)

  const Navigate = useNavigate()
  var [now, setNow] = useState(0)

  const progress1 = () => {
    if (now === 0) setNow(now + 25)
  }

  const progress2 = () => {
    if (now === 25) setNow(now + 25)
  }

  const progress3 = () => {
    if (now === 50) setNow(now + 25)
  }

  const progress4 = () => {
    if (now === 75) setNow(now + 25)
  }

  return (
    <>
      <div className='createDoorNav pt-4'>
        <h5 onClick={() => Navigate(-1)} className='d-flex  align-items-center'><FiArrowLeft className='mx-4' style={{cursor:'pointer'}}/> Configure a new door  <span style={{fontSize:".8rem"}} className="m-2"> 2 of 3</span> </h5>
      </div>
      <Container className='mt-5 mb-5'>

        <Container className=''>
          <ProgressBar className='my-3 progressBar' variant='success' now={now} />
          <span className='progress-level'>{`${now}%`}</span>
        </Container>

        {/* 1st box */}
        <Card className='mb-3'>
          <Card.Header>Featured</Card.Header>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              PRODUCT INFO
            </Form.Label>
            <Col sm="10">
              <Form.Select value={info} aria-label="Floating label select example" onChange={(e) => setInfo(e.target.value)}>
                <option value="Hp Laptop">Hp Laptop</option>
                <option value="Dell Laptop">Dell Laptop</option>
                <option value="Apple">Apple</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CART NAME
            </Form.Label>
            <Col sm="10">
              <Form.Select value={name} aria-label="Floating label select example" onChange={(e) => setName(e.target.value)}>
                <option value="2 Classic Collection Garage Door, 2 Entry Door">2 Classic Collection Garage Door, 2 Entry Door</option>
                <option value="Opener Head Residential 8010 DC Chain/Cable Drive">Opener Head Residential 8010 DC Chain/Cable Drive</option>
                <option value="Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol-WH.9.G.2J.B..S…">Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol-WH.9.G.2J.B..S…</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              SHIPPING POINT
            </Form.Label>
            <Col sm="10">
              <Form.Select value={shipPoint} aria-label="Floating label select example" onChange={(e) => setShipPoint(e.target.value)}>
                <option value="Russia Plant">Russia Plant</option>
                <option value="ABC Plant">ABC Plant</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CREATED BY
            </Form.Label>
            <Col sm="10">
              <Form.Select value={createdBy} aria-label="Floating label select example" onChange={(e) => setCreatedBy(e.target.value)}>
                <option value="Jonathon Peter">Jonathon Peter</option>
                <option value="Christine Agape">Christine Agape</option>
                <option value="Casette Snowads">Casette Snowads</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              WIND CODE
            </Form.Label>
            <Col sm="10">
              <Form.Select value={windcode} aria-label="Floating label select example" onChange={(e) => setWindcode(e.target.value)}>
                <option value="WindCode W1">WindCode W1</option>
                <option value="WindCode W2">WindCode W2</option>
                <option value="WindCode W3">WindCode W3</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <span className='progressBtn' onClick={progress1} >Done</span>

        </Card>

        {/* 2nd */}
        <Card className='mb-3'>
          <Card.Header>Featured</Card.Header>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              PRODUCT INFO
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example">
                <option value="Hp Laptop">Hp Laptop</option>
                <option value="Dell Laptop">Dell Laptop</option>
                <option value="Apple">Apple</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CART NAME
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example">
                <option value="Hp Head">Hp Head</option>
                <option value="Dell Head">Dell Head</option>
                <option value="Apple Head">Apple Head</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              SHIPPING POINT
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example" >
                <option value="Russia Plant">Russia Plant</option>
                <option value="ABC Plant">ABC Plant</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CREATED BY
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example" >
                <option value="Jonathon Peter">Jonathon Peter</option>
                <option value="Christine Agape">Christine Agape</option>
                <option value="Casette Snowads">Casette Snowads</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              WIND CODE
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example" >
                <option value="WindCode W1">WindCode W1</option>
                <option value="WindCode W2">WindCode W2</option>
                <option value="WindCode W3">WindCode W3</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <span className='progressBtn' onClick={progress2} >Done</span>

        </Card>

        {/* 3rd */}
        <Card className='mb-3'>
          <Card.Header>Featured</Card.Header>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              PRODUCT INFO
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example">
                <option value="Hp Laptop">Hp Laptop</option>
                <option value="Dell Laptop">Dell Laptop</option>
                <option value="Apple">Apple</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CART NAME
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example">
                <option value="Hp Head">Hp Head</option>
                <option value="Dell Head">Dell Head</option>
                <option value="Apple Head">Apple Head</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              SHIPPING POINT
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example" >
                <option value="Russia Plant">Russia Plant</option>
                <option value="ABC Plant">ABC Plant</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CREATED BY
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example" >
                <option value="Jonathon Peter">Jonathon Peter</option>
                <option value="Christine Agape">Christine Agape</option>
                <option value="Casette Snowads">Casette Snowads</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              WIND CODE
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Floating label select example" >
                <option value="WindCode W1">WindCode W1</option>
                <option value="WindCode W2">WindCode W2</option>
                <option value="WindCode W3">WindCode W3</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <span className='progressBtn' onClick={progress3} >Done</span>

        </Card>

        {/* 4th */}
        <Card className='mb-3'>
          <Card.Header>Featured</Card.Header>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              PRODUCT INFO
            </Form.Label>
            <Col sm="10">
              <Form.Select value='' aria-label="Floating label select example">
                <option value="Hp Laptop">Hp Laptop</option>
                <option value="Dell Laptop">Dell Laptop</option>
                <option value="Apple">Apple</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CART NAME
            </Form.Label>
            <Col sm="10">
              <Form.Select value='' aria-label="Floating label select example">
                <option value="Hp Head">Hp Head</option>
                <option value="Dell Head">Dell Head</option>
                <option value="Apple Head">Apple Head</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              SHIPPING POINT
            </Form.Label>
            <Col sm="10">
              <Form.Select value='' aria-label="Floating label select example" >
                <option value="Russia Plant">Russia Plant</option>
                <option value="ABC Plant">ABC Plant</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              CREATED BY
            </Form.Label>
            <Col sm="10">
              <Form.Select value='' aria-label="Floating label select example" >
                <option value="Jonathon Peter">Jonathon Peter</option>
                <option value="Christine Agape">Christine Agape</option>
                <option value="Casette Snowads">Casette Snowads</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              WIND CODE
            </Form.Label>
            <Col sm="10">
              <Form.Select value='' aria-label="Floating label select example" >
                <option value="WindCode W1">WindCode W1</option>
                <option value="WindCode W2">WindCode W2</option>
                <option value="WindCode W3">WindCode W3</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <span className='progressBtn' onClick={progress4} >Done</span>

        </Card>

        <Container className='m-3 d-flex justify-content-end'>
          <Button variant='light' bg-light className='mx-3' style={{ color: 'brown', border: '2px solid brown' }}>
            PREVIEW
          </Button>
          <Button style={{ color: 'white', border: 'none', backgroundColor: 'brown' }} onClick={() => Navigate('/confirmPage')}>
            ADD TO CART
          </Button>
        </Container>

      </Container>
    </>
  )
}

export default ConfigureNewDoor