import React from 'react'
import { Row, Col, Card, Container, ProgressBar } from 'react-bootstrap'
import { ArrowRight, Eye, Moisture, Wind } from 'react-bootstrap-icons'
import { CardCustom } from './CardCustom'

export const Metrics = ( { humidity, visibility, wind, pressure } ) => {
  return (
    <Container fluid={true} className='margin-large text-center'>
        <h2>Today's Highlights</h2>
        <Row>
            <Col>
                <Col>
                    <CardCustom title={ 'Air Presure' }
                                icon={ <ArrowRight color="royalblue" size={20} /> }
                                content={ `${ pressure } mb` }
                                />
                </Col>
                <Col>
                    <CardCustom title={ 'Humidity' }
                                icon={ <Moisture color="royalblue" size={20} /> }
                                content={ 
                                        <Row>
                                            <Col sm={3}>
                                                <Card.Subtitle className="mb-2">{ humidity } %</Card.Subtitle>
                                            </Col>
                                            <Col sm={9}>
                                                <ProgressBar animated now={ humidity } />
                                            </Col>
                                        </Row> 
                                        }
                                />
                </Col>
            </Col>
            <Col>
                <Col>
                    <CardCustom title={ 'Visibility' }
                                icon={ <Eye color="royalblue" size={20} /> }
                                content={ `${ visibility/10 } meters` }
                                />
                </Col>
                <Col >
                    <CardCustom title={ 'Wind Status' }
                                icon={ <Wind color="royalblue" size={20} /> }
                                content={ `${ wind } km/h` }
                                />
                </Col>
            </Col>
        </Row>
    </Container>
  )
}
