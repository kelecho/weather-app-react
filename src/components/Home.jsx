import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchForm } from './SearchForm';
import { Buttons } from './Buttons';
import { Aside } from './Aside';
import { Pronostic } from './Pronostic';
import { Metrics } from './Metrics';
import { Loading } from './Loading';
import '../App.css';
import { ErrorPage } from './ErrorPage';


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function Home() {
  const [info, setInfo] = useState(null);
  const [city, setCity] = useState('Asuncion')
  const [kindTemp, setKindTemp] = useState('c');
  const [httpStatusCode, setHttpStatusCode] = useState();
  const [error, setError] = useState();


  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  }
  
  useEffect(() => {
    
    const fetchData = async ( ) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          
          setInfo(data);
          console.log(data);
          console.log(response.status)
        } else {
          setHttpStatusCode(response.status);
          setError('Ciudad no valida')
        }
      } catch (error) {
        console.log("No pudimos hacer la solicitud para obtener la informacion");
      }
    }
    fetchData( city );
    
  }, [city]);



  const changeTemperature = (value) => {
    return (kindTemp === 'c') ? `${ value.toFixed(1) } °C`: `${ (value  * 1.8 + 32).toFixed(1) } °F`
  }

  if (!info) return <Loading />

  if (httpStatusCode === 404) {
    return <ErrorPage value={ error }/>
  }

  
  return (
    <div className="mt-4 text-white">
      <Container >
        <Row>
          <Col className="margin-large">
            <Aside  clouds={ info.clouds.all } 
                    weather = { info.weather } 
                    name={ info.name } 
                    temperature={ info.main.temp }
                    icon={ info.weather[0].icon }
                    changeTemperature={ changeTemperature } 
            />
          </Col>
          
          <Col>
            <Row className="margin-large">
              <Col>
                <SearchForm handleOnSubmit = { handleOnSubmit } />
              </Col>  
            </Row>
            <Row className="margin-large">
              <Col>
                <Buttons setKindTemp={ setKindTemp }></Buttons>
              </Col>
            </Row>
            <Row className="margin-large">
              <Col>
                  <Pronostic temp_min = { info.main.temp_min }
                             temp_max = { info.main.temp_max }
                             changeTemperature={ changeTemperature }
                   />
              </Col>  
            </Row>
            <Row className="margin-large">
              <Col><Metrics humidity={ info.main.humidity } 
                            visibility={ info.visibility } 
                            wind={ info.wind.speed } 
                            pressure={ info.main.pressure }
                    />
              </Col>  
            </Row>
          </Col>  
        </Row>
      </Container>
    </div>  
  );
}

export default Home;
