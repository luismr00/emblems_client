import React from 'react'
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <div>
      <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
        <h2 className='d-flex justify-content-center'>LOGO</h2>
      </Link>
      <div className='d-flex justify-content-center'>
        <Link to="/login" className='p-1'>Login</Link>
        <Link to="/register" className='p-1'>Register</Link>
      </div>
      <div className='container-lg'>
        <Form className='bg-dark text-white p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-white">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <p className='d-flex justify-content-center'>- or -</p>
      <div className='d-flex justify-content-center'>
        <button>Sign in with StartGG</button>
      </div>
    </div>
  )
}

export default Login