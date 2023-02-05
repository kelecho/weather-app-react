import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ThermometerHigh, ThermometerLow } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';

export const Pronostic = ({ temp_min, temp_max, changeTemperature }) => {
  return (
    <Container fluid={true} className='text-center'>  
        <Row>
            <Col>
                <Card className='margin-large'>
                    <Card.Body>
                        <Card.Title>
                            <ThermometerLow color="royalblue" size={30} />
                            Temp. Min.
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ changeTemperature( temp_min ) } °C</Card.Subtitle>
                    </Card.Body>
                </Card>    
            </Col>
            <Col>
                <Card className='margin-large'>
                    <Card.Body>
                        <Card.Title>
                            <ThermometerHigh color="royalblue" size={30} />    
                            Temp. Max.
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ changeTemperature( temp_max ) } °C</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col> 
        </Row>
    </Container>

    
  )
}
