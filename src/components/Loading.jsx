import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
  return (
    <div className='center'>
      <div>
          <h3>
            Loading...
          </h3>
      </div>
      <Spinner animation="grow" variant="secondary" />  
    </div>
  );
}

