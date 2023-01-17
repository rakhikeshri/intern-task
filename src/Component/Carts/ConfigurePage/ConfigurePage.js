import React, { useState, useEffect } from 'react'
import './configurePage.css'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Form } from 'react-bootstrap'

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
  // const [option1, setOption1] = useState('')

  // useEffect(() => {
  //   const data1 = localStorage.getItem(option1)
  //   setOption1(JSON.parse(data1))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('option1', JSON.stringify(option1))
  // },[option1])

  const [option, setOption] = useState(
    getLocalStorage()
  )

  console.log(option)
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
      <div className='createDoorNav'>
        <h3 onClick={() => Navigate(-1)} className='backBtn'>back</h3>
      </div>
      <Container className='mt-5 mb-5'>

        <Button className='nextBtn' onClick={() => Navigate('/configureNewDoor')}>CONFIGURE</Button>

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

      </Container>
    </>
  )
}

export default ConfigurePage