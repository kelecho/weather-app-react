import React from 'react'
import { Container, Button } from 'react-bootstrap'

export const Buttons = ({ setKindTemp }) => {
  return (
    <Container className='margin-large'>
      <div className='d-flex justify-content-end'>
        <Button onClick={ e => setKindTemp('c') } variant="light" className='rounded-circle text-center'>°C</Button>
        <Button onClick={ e => setKindTemp('f') } variant="secondary" className='rounded-circle text-center'>°F</Button>
      </div>
    </Container>
    
  )
}
