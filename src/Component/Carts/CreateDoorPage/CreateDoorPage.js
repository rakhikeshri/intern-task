import React from 'react'
import './createDoorPage.css'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const CreateDoorPage = () => {
  const Navigate = useNavigate()
  return (
    <>
      <div className='createDoorNav'>

        <h3 onClick={() => Navigate(-1)} className='backBtn'>back</h3>
      </div>
      <Container  className='mt-5 mb-5'>
        <Container fluid onClick={()=>Navigate('/configurePage')} className='tablets-list shadow m-2 p-4 pb-4 py-3 ' style={{cursor:'pointer'}}>
          <h3 className='my-3'>Configure your door from scratch</h3>
          <small>Group Name £Classic_John</small>
        </Container>


      </Container>
    </>
  )
}

export default CreateDoorPage