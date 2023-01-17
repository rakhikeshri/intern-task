import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Table } from 'react-bootstrap'
import './ActiveCarts.css'
import ActiveData from './ActiveData'
import CreateOrder from './CreateOrder'

const ActiveCarts = () => {
  // const [activeData, setActiveData] = useState([])
  const [info, setInfo] = useState('')
  const [name, setName] = useState('')
  const [shipPoint, setShipPoint] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [windCode, setWindCode] = useState('')

    return (
    <>
      <CreateOrder />
      <div>
        <Table className='big-screen' striped bordered hover>
          <thead>
            <tr>
              <th>PRODUCT INFO</th>
              <th>CART NAME</th>
              <th>SHIPPING POINT</th>
              <th>CREATED BY</th>
              <th>EXPIRY</th>
            </tr>
          </thead>
          <tbody>
            {
              // activeData.filter(data => data.createdBy.toLowerCase().includes(searchTerm))
                activeData.map((data) => {
                  return (
                    <tr>
                      <td>{data.info}</td>
                      <td>{data.name}</td>
                      <td>{data.shipPoint}</td>
                      <td>{data.createdBy}</td>
                      <td>{data.expiry}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </Table>
      </div>

      {/* tablets */}

      <Container fluid className='tablets'>
        <Container fluid className='tablets-list shadow m-2 p-2 py-3'>
          <small>Group Name £Classic_John</small>
          <p className='my-3'>Classic Collection bvmbm</p>
          <small>Group Name £Classic_John</small>
        </Container>

        <Container fluid className='tablets-list shadow m-2 p-2 py-3'>
          <small>Group Name £Classic_John</small>
          <p className='my-3'>Classic Collection bvmbm</p>
          <small>Group Name £Classic_John</small>
        </Container>

        <Container fluid className='tablets-list shadow m-2 p-2 py-3'>
          <small>Group Name £Classic_John</small>
          <p className='my-3'>Classic Collection bvmbm</p>
          <small>Group Name £Classic_John</small>
        </Container>

        <Container fluid className='tablets-list shadow m-2 p-2 py-3'>
          <small>Group Name £Classic_John</small>
          <p className='my-3'>Classic Collection bvmbm</p>
          <small>Group Name £Classic_John</small>
        </Container>

      </Container>
    </>

  )
}

export default ActiveCarts