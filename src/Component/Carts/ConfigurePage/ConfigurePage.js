import React, { useState, useEffect } from 'react'
import './configurePage.css'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Form } from 'react-bootstrap'
import { FiArrowLeft } from "react-icons/fi";

const getLocalStorage = () => {
  let savedOption = JSON.parse(localStorage.getItem("option"));
  if (savedOption) {
    return savedOption;
  } else {
    return [];
  }
};

const ConfigurePage = () => {
  const Navigate = useNavigate()

  const [option, setOption] = useState(
    getLocalStorage()
  )

  const setData = (e) => {
    const { name, value } = e.target;
    setOption((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('option', JSON.stringify(option))
  }, [option])

  return (
    <>
      <div className='createDoorNav pt-4'>
        <h5 onClick={() => Navigate(-1)} className='d-flex  align-items-center'><FiArrowLeft className='mx-4' style={{ cursor: 'pointer' }} /> Configure a new door  <span style={{ fontSize: ".8rem" }} className="m-2"> 2 of 3</span> </h5>
      </div>
      <Container className='mt-5 mb-5'>
        <Container className='mb-3'>
          <span>Select Category</span>

          <Form.Select value={option.option1} aria-label="Floating label select example" name='option1' onChange={setData}>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </Form.Select>
        </Container>

        <Container className='mb-3'>
          <span>Select Category</span>
          <Form.Select value={option.option2} aria-label="Floating label select example" name='option2' onChange={setData}>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </Form.Select>
        </Container>

        <Container className='mb-3'>
          <span>Select Category</span>
          <Form.Select value={option.option3} aria-label="Floating label select example" name='option3' onChange={setData}>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </Form.Select>
        </Container>

        <Container className='m-3 d-flex justify-content-end'>

          <Button style={{ color: 'white', border: 'none', backgroundColor: 'brown' }} onClick={() => Navigate('/configureNewDoor')}>
            CONFIGURE
          </Button>

        </Container>

      </Container>
    </>
  )
}

export default ConfigurePage