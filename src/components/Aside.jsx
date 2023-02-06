import React, { useState } from 'react'
import { GeoAlt, ThermometerSun } from 'react-bootstrap-icons';
import { Row, Col, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export const Aside = ( { clouds, weather, name, temperature, changeTemperature, icon='unknown' } ) => {

  const [date] = useState(new Date().toLocaleString());


  return (
    <Card className="text-center" style={{ height: '55vh', position: 'relative' }}>
      <Card.Body>
        <Image  roundedCircle='true' src={process.env.PUBLIC_URL + `images/${ icon }.png`} alt="icon" 
                style={{ border: '1px solid white', margin: '2rem', padding: '2rem', backgroundColor: 'white'
                 }} />
        
        <Card.Title>{ weather[0].main }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> { weather[0].description }</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Clouds: { clouds } %</Card.Subtitle>
        <Row>
          <Col className='text-left'>
            <ThermometerSun color="royalblue" size={90} /> 
          </Col>
          <Col className='text-right'>
            <br />
            <Card.Subtitle className="mb-2 text-muted"><h1>{ changeTemperature( temperature ) }</h1></Card.Subtitle>
          </Col>
        </Row>
        
        <Card.Footer className='text-center' style={{ position: 'absolute', bottom: 0, width: "100%" }}>
            <Card.Title>{ date }</Card.Title>
            <Card.Title>
              <GeoAlt color="royalblue" size={20} />
              { name }
            </Card.Title>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
