import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '../css/Mycard.css';


import { useState } from "react";



const Mycard = (props) => {
  
        return (
    <div>
       <Card className='scard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        
        <Card.Text>
        {props.data.Brand}
        </Card.Text>
        <p>Men's Black Straw Hat Crew Graphic Printed....</p>
        <h5>₹999</h5>
        <p>₹919 For TriBe Members</p>
        <Button variant="secondary" size="sm">
          100% COTTON
        </Button>

      </Card.Body>
     
     
    </Card>
 
     
    </div>
  )
}

export default Mycard;