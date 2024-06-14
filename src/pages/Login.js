import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authenticate } from '../helpers/auth';
import { useSelector, useDispatch } from 'react-redux'
import { login, renderProfileNavs } from '../store/authSlice';
import { getCookie } from '../helpers/auth';


const Login = (e) => {
  // const logStatus = useSelector((state) => state.auth.isLoggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const isLoggedIn = () => {
    const checkCookie = getCookie('token');
    if(checkCookie) {
      navigate('/dashboard');
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(login());
    // dispatch(renderProfileNavs());
    // navigate('/dashboard');
    // console.log(email, password);
    signIn();
  }

  const getUserDetails = async (token, id) => {
    const response = await fetch(`https://testing.emblems.gg/user/UserDetails.php?id=${id}`, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${token}`
      },
    });

    const data = await response.json();
    if(data.status === 'success') {
      if(data.message !== null) {
        navigate('/dashboard');
      } else {
        navigate('/registernext');
      }
    } else {
      console.log('Unable to fetch userDetails. Check dev tools for more info.');
      console.log(data);
    }
  }

  const signIn = async () => {
    const response = await fetch('https://testing.emblems.gg/user/Session.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Access-Control-Allow-Origin': 'no-cors'
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });

    const data = await response.json();
    if(data.status === 'success') {
      authenticate(data.message);
      // Check if userDetails is filled or empty
      getUserDetails(data.message.token, data.message.id)
    } else {
      alert('Login failed. Check dev tools for more info.');
      console.log(data);
    }
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
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-white">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
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