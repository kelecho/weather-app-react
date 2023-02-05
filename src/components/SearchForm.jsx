import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import { citiesList } from '../data/Cities';

export const SearchForm = ( { setCity } ) => {
  

  
  return (
    <Container className="">
      <h2>Search by City</h2>
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


