import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

export const Error = () => {

  return (
    <>
      <Alert show={true} variant="danger">
        <Alert.Heading>Error ?!</Alert.Heading>
        <p>
            Credential Invalid!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={`/`} variant="outline-danger">
            Back to Login
          </Link>
        </div>
      </Alert>
    </>
  );
}
 