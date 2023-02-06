import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import { citiesList } from '../data/Cities';
import { Link } from 'react-router-dom';

export const SearchForm = ( { setCity } ) => {
  

  
  return (
    <Container>
      <Row>
        <Col>
          <h2>Search by City</h2>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Link to={`/`} className='btn btn-dark outline-dark'>Exit</Link>
        </Col>
      </Row>
      
      <Form className="grilla-search-form margin-large" >
          <Typeahead 
              id="cities-select"
              labelKey="name"
              onChange={ selected => setCity( selected[0] ) }
              options={ citiesList }
              placeholder="Choose a city..."
            />
      </Form>
    </Container>
    
  )
}


