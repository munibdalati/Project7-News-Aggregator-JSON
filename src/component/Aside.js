import React from 'react'
import Col from 'react-bootstrap/Col';
import Calendar from './Calender';
import Weather from './Weather';


const Aside = () => {
  return (
    <Col className='aside col-3 p-2'>
      <h1>Aside</h1>
      <Weather/>
      <Calendar/>
    </Col>
  )
}

export default Aside
