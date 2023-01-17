import React, { useState, useEffect, useContext } from 'react'
import { Container, Table } from 'react-bootstrap'
import './ActiveCarts.css'
import CreateOrder from './CreateOrder'
import { AppContext } from '../../../App'
import DummyData from './DummyData'


const ActiveCarts = () => {

  const { searchTerm } = useContext(AppContext)
  const [activeData, setActiveData] = useState([])
  const [dummyData, setDummyData] = useState(DummyData)

  useEffect(() => {
    const activeData = window.localStorage.getItem('activeOptions')
    setActiveData(JSON.parse(activeData))
  }, [])

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
              <th>WINDCODE</th>
            </tr>
          </thead>
          <tbody>
            {
              dummyData.filter(data => data.info.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.info}</td>
                      <td>{data.name}</td>
                      <td>{data.shipPoint}</td>
                      <td>{data.createdBy}</td>
                      <td>{data.windcode}</td>
                    </tr>
                  )
                })
            }
            {
              activeData.filter(data => data.info.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.info}</td>
                      <td>{data.name}</td>
                      <td>{data.shipPoint}</td>
                      <td>{data.createdBy}</td>
                      <td>{data.windcode}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </Table>
      </div>

      {/* tablets */}

      <Container fluid className='tablets'>
        {
          dummyData.filter(data => data.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((data, index) => {
              return (
                <Container fluid className='tablets-list shadow m-2 p-2 py-3' key={index}>
                  <h4 style={{ color: "grey" }}>CreatedBy : {data.createdBy}</h4>
                  <h3 className='my-3'>Name : {data.name}</h3>
                  <p>Product Info : {data.info}</p>
                </Container>
              )
            }
          )
        }
        {
          activeData.filter(data => data.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((data, index) => {
              return (
                <Container fluid className='tablets-list shadow m-2 p-2 py-3' key={index}>
                  <h4 style={{ color: "grey" }}>CreatedBy : {data.createdBy}</h4>
                  <h3 className='my-3'>Name : {data.name}</h3>
                  <p>Product Info : {data.info}</p>
                </Container>
              )
            }
          )
        }

      </Container>
    </>

  )
}

export default ActiveCarts