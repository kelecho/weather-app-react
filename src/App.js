import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';
import { Aside } from './components/Aside';
import { Pronostic } from './components/Pronostic';
import { Metrics } from './components/Metrics';
import { Loading } from './components/Loading';
import './App.css';


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [city, setCity] = useState('Asuncion')
  const [kindTemp, setKindTemp] = useState('c');

  
  useEffect(() => {
    
    const fetchData = async ( city = 'Asuncion' ) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setInfo(data)
          setError(null);
          setIsLoading(false);
          
        } else {
          setError("Hubo un error al obtener la informacion");
        }
      } catch (error) {
        setError("No pudimos hacer la solicitud para obtener la informacion");
      }
    }
    fetchData( city );
    
  }, [city, isLoading]);



  const fetchData = () => {
    setIsLoading(true);
  };


  if (isLoading) 
    return (<Loading />);
  

  if (error) { // ⬅️ mostramos el error (si es que existe)
    return (
      <div className="App text-center">
        <h1>{error}</h1>
        <button onClick={ fetchData( ) }>Volver a intentarlo</button>
      </div>
    );
  }

  const changeTemperature = (value) => {
    return (kindTemp === 'c') ? `${ (value / 10).toFixed(0) } °C`: `${ ((value / 10) * 1.8 + 32).toFixed(0) } °F`
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
                    changeTemperature={ changeTemperature } 
            />
          </Col>
          
          <Col>
            <Row className="margin-large">
              <Col>
                <SearchForm setCity = { setCity } />
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

export default App;
