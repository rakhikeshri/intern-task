import React, { useState, useEffect } from 'react'
import './configureNewDoor.css'
import { useNavigate } from 'react-router-dom'
import { Container, ProgressBar, Button, Card, Form, Row, Col } from 'react-bootstrap'

const ConfigureNewDoor = () => {
  const Navigate = useNavigate()
  const now = 40;
  const [option, setOption] = useState()
  return (
    <>
      <div className='createDoorNav'>

        <h3 onClick={() => Navigate(-1)} className='backBtn'>back</h3>

      </div>
      <Container className='mt-5 mb-5'>
        <Button className='nextBtn'>CONFIGURE</Button>

        <ProgressBar now={now} label={`${now}%`} />;


        <Card>
          <Card.Header>Featured</Card.Header>

          <Form.Group as={Row} className="my-3 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </Form.Select>
                <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </Form.Select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1remx' }}>
                <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </Form.Select>
                <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </Form.Select>
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Card>

        <Card  className='mt-2'>
          <Card.Header>Window Options</Card.Header>

          <Form.Group as={Row} className="my-3 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Card>
        
        <Card  className='mt-2'>
          <Card.Header>Window Options</Card.Header>

          <Form.Group as={Row} className="my-3 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
        
          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
        
          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
        
        </Card>
        
        <Card  className='mt-2'>
          <Card.Header>Window Options</Card.Header>

          <Form.Group as={Row} className="my-3 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="10">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-2 mx-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Assembly Type
            </Form.Label>
            <Col sm="5" className='my-2'>
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)<br />
              <input type='checkbox' className='my-2'/> Extra Strut(s)
            </Col>
            <Col sm="5">
              <Form.Select value={option} aria-label="Floating label select example" name='option3'>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>
        
        
        </Card>

      </Container>

    </>
  )
}

export default ConfigureNewDoor