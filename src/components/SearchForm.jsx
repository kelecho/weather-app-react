import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const SearchForm = ( { handleOnSubmit } ) => {
  
  return (
    <Container>
      <Row>
        <Col>
          <h4>Search by City</h4>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Link to={`/`} className='btn btn-success'>Exit</Link>
        </Col>
      </Row>
      
      <Form onSubmit={ e => handleOnSubmit(e) } className="grilla-search-form margin-large" >
        <Form.Control
          name="city"
          type="text"
          id="cityTextField"
          aria-describedby="citiesTyped"
        />    
      </Form>
    </Container>
    
  )
}


