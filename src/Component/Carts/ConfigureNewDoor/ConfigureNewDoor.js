import React, { useState, useEffect } from 'react'
import './configureNewDoor.css'
import { useNavigate } from 'react-router-dom'
import { Container, ProgressBar, Button, Card, Form, Row, Col } from 'react-bootstrap'

const ConfigureNewDoor = () => {
  const Navigate = useNavigate()
  let now = 0;

  function increaseNow(now) {
    now += 25;
  }

  const [option, setOption] = useState()
  return (
    <>
      <div className='createDoorNav'>

        <h3 onClick={() => Navigate(-1)} className='backBtn'>back</h3>

      </div>
      <Container className='mt-5 mb-5'>
        <ProgressBar className='my-3' now={now} label={`${now}%`} />


        {/* 1st box */}

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
              <div style={{ display: 'flex', gap: '1rem', }}>
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

          <Button variant='primary' style={{ maxWidth: '200px' }} onClick={() => increaseNow(now)}>Save</Button>

        </Card>


        {/* 2nd box */}

        <Card className='mt-2'>
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

        {/* 3rd box */}
        <Card className='mt-2'>
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


        {/* 4th box */}

        <Card className='mt-2'>
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
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)<br />
              <input type='checkbox' className='my-2' /> Extra Strut(s)
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

        <Container className='m-3 d-flex justify-content-end'>
          <Button variant='light' bg-light className='mx-3' style={{ color: 'brown', border: '2px solid brown' }}>
            Preview
          </Button>
          <Button style={{ color: 'white', border: 'none', backgroundColor: 'brown' }} onClick={() => Navigate('/confirmPage')}>
            Preview
          </Button>
        </Container>

      </Container>

    </>
  )
}

export default ConfigureNewDoor