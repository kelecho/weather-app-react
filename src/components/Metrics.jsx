import React from 'react'
import { Row, Col, Card, Container, ProgressBar } from 'react-bootstrap'
import { ArrowRight, Eye, Moisture, Wind } from 'react-bootstrap-icons'

export const Metrics = ( { humidity, visibility, wind, pressure } ) => {
  return (
    <Container fluid={true} className='margin-large text-center'>
        <h2>Today's Highlights</h2>
        <Row>
            <Col>
                <Col>
                    <Card className='margin-large'>
                        <Card.Body>
                            <Card.Title>
                                <ArrowRight color="royalblue" size={20} />
                                Air Presure
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{ pressure } mb</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='margin-large'>
                        <Card.Body>
                            <Card.Title>
                                <Moisture color="royalblue" size={20} />   
                                Humidity
                            </Card.Title>
                            <Row>
                                <Col sm={3}>
                                    <Card.Subtitle className="mb-2 text-muted">{ humidity } %</Card.Subtitle>
                                </Col>
                                <Col sm={9}>
                                    <ProgressBar animated now={ humidity } />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Col>
            <Col>
                <Col>
                    <Card className='margin-large'>
                        <Card.Body>
                            <Card.Title>
                                <Eye color="royalblue" size={20} />
                                Visibility
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{ visibility/10 } meters</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className='margin-large'>
                        <Card.Body>
                            <Card.Title>
                                <Wind color="royalblue" size={20} />
                                Wind Status</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{ wind } km/h</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Col>
        </Row>
    </Container>
    
  )
}
