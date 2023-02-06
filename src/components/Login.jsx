import { Container, Card } from 'react-bootstrap';
import { CloudSun } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    if (data.password === '12345')
      navigate('/home')
    else
      navigate('/not_found')
  } 

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Container>
      <Card className='center margin-large text-white' style={{ width: '30rem',
                                                                margin: '0 auto' }}>
        <Card.Body>
            <Card.Title className='text-center'>
              <CloudSun color="royalblue" size={150} />
              <br />
              <br />
              Log In
            </Card.Title>
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  {/* register your input into the hook by invoking the "register" function */}
                  <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  {/* register your input into the hook by invoking the "register" function */}
                  <Form.Control type="password" {...register("password", { required: true })} />
                  <Form.Text className="text-muted">
                    {errors.password && <span>This field is required</span>}
                  </Form.Text>
                </Form.Group>
                <Button variant='primary' type="submit">Log In</Button>
              </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}      
    