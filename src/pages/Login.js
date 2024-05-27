import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux'
import { login, renderProfileNavs } from '../store/authSlice';


const Login = (e) => {
  const logStatus = useSelector((state) => state.auth.isLoggedIn);
  
  // const someText = useSelector((state) => state.auth.someString);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("Current logged state: " + isLogged);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
    // renderProfileNavs
    dispatch(renderProfileNavs());
    navigate('/dashboard');
    // console.log("Logged state now: " + isLogged);
  }

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
        <Form className='bg-dark text-white p-3' onSubmit={(event) => handleSubmit(event)}>
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
      {/* <h2>Current log state:</h2>
      <p>{someText}</p> */}
    </div>
  )
}

export default Login