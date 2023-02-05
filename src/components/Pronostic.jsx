import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ThermometerHigh, ThermometerLow } from 'react-bootstrap-icons';
import { CardCustom } from './CardCustom';

export const Pronostic = ({ temp_min, temp_max, changeTemperature }) => {
  return (
    <Container fluid={true} className='text-center'>  
        <Row>
            <Col>
                <CardCustom title={ 'Temp. Min.' }
                            icon={ <ThermometerLow color="royalblue" size={30} /> }
                            content={ `${ changeTemperature( temp_min ) }` }
                            />
            </Col>
            <Col>
                <CardCustom title={ 'Temp. Max.' }
                            icon={ <ThermometerHigh color="royalblue" size={30} /> }
                            content={ `${ changeTemperature( temp_max ) }` }
                            />
            </Col> 
        </Row>
    </Container>

    
  )
}
