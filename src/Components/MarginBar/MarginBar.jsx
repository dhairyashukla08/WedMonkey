import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown,ButtonGroup,Button,Container, Col,Row } from 'react-bootstrap';

import './Marginbar.css';

const MarginBar = () => {
  
  return (
    <Container className='dropdown-container'>
      
        <Dropdown as={ButtonGroup} className='dropdown-button'>
          <Button variant='primary'>Wedding PDF Invitation</Button>
          <Dropdown.Toggle  split variant='primary' id='dropdown-split-basic'/>
          <Dropdown.Menu>
          <Dropdown.Item href='#/All'>All </Dropdown.Item>
            <Dropdown.Item href='#/Hindu'>Hindu Invitation</Dropdown.Item>
            <Dropdown.Item href='#/Muslim'>Muslim Invitation</Dropdown.Item>
            <Dropdown.Item href='#/Christian'>Christian Invitation</Dropdown.Item>
            <Dropdown.Item href='#/Bodh'>Bodh Invitation</Dropdown.Item>
            <Dropdown.Item href='#/Sindhi'>Sindhi Invitation</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        
        <Dropdown as={ButtonGroup} className='dropdown-button'>
        <Button variant='secondary'>Greetings</Button>
        <Dropdown.Toggle  split variant='Secondary' id='dropdown-split-basic-2'/> 
        <Dropdown.Menu>
        <Dropdown.Item href='#/All'>All </Dropdown.Item>
            <Dropdown.Item href='#/Birthday'>Birthday Greetings</Dropdown.Item>
            <Dropdown.Item href='#/Diwali'>Diwali Greetings</Dropdown.Item>
            <Dropdown.Item href='#/Christian'>Chrismas Greetings</Dropdown.Item>
            <Dropdown.Item href='#/others'>Others</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
       
        <Dropdown as={ButtonGroup} className='dropdown-button'>
        <Button variant='secondary' href='#/WeddingVideo'>Wedding Video</Button>
        
       
        </Dropdown>

        
        
    </Container>
  )
}

export default MarginBar