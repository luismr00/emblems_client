import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom";

const InitialRegistration = ({setInitialRegAccepted}) => {
  const [provisionToken, setProvisionToken] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  
  // These work with reconfirm validation fields after registration is attempted
  let tokenValid = false;
  let emailTaken = false;
  let usernameTaken = false;

  const validateProvisionToken = () => {
    if (tokenValid) {
      return 'Token is invalid or has been used';
    }
    if (provisionToken.trim() === '') {
      return 'Provision token is required';
    }
    return '';
  };

  const validateUsername = () => {
    const pattern = /^[a-zA-Z0-9_.-]{3,20}$/;
    if(usernameTaken) {
      return 'Username is already taken';
    }
    if (username.trim() === '') {
      return 'Username is required';
    }
    if (!pattern.test(username)) {
      return 'Username should be between 3 and 20 characters long and should only contain letters, numbers, underscores, hyphens, and periods';
    }
    return '';
  };

  const validateEmail = () => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailTaken) {
      return 'Email is already taken';
    }
    if (email.trim() === '') {
      return 'Email is required';
    }
    if (!pattern.test(email)) {
      return 'Email is invalid';
    }
    return '';
  };

  const validatePassword = () => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (password.trim() === '') {
      return 'Password is required';
    }
    if (!pattern.test(password)) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character and should be between 8 and 20 characters long';
    }
    return '';
  };

  const validatePasswordConfirm = () => {
    if (passwordConfirm.trim() === '') {
      return 'Password confirmation is required';
    }
    if (password !== passwordConfirm) {
      return 'Passwords do not match';
    }
    return '';
  };

  const registerUser = async () => {
    // Register user fetch function here
    const response = await fetch('https://testing.emblems.gg/user/Register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        token: provisionToken,
        displayname: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    if (data.status === 'success') {
      alert('Registration successful');
      navigate('/login');
    } else {
      alert('Registration failed. Check dev tools for more info.');
      console.log('Registration failed. Create UI to display error message whenever you can.');
      console.log(data);
    }

    // Mock response -> if email or username is taken then set to true else set to false
    // emailTaken = false;
    // usernameTaken = false;
  };

  const validateFields = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    let newErrors = {};
    let formIsValid = true;

    const provisionTokenError = validateProvisionToken();
    if (provisionTokenError) {
      newErrors.provisionToken = provisionTokenError;
      formIsValid = false;
    }
    
    const usernameError = validateUsername();
    if (usernameError) {
      newErrors.username = usernameError;
      formIsValid = false;
    }

    const emailError = validateEmail();
    if (emailError) {
      newErrors.email = emailError;
      formIsValid = false;
    }

    const passwordError = validatePassword();
    if (passwordError) {
      newErrors.password = passwordError;
      formIsValid = false;
    }

    const passwordConfirmError = validatePasswordConfirm();
    if (passwordConfirmError) {
      newErrors.passwordConfirm = passwordConfirmError;
      formIsValid = false;
    }

    setErrors(newErrors);
    setValidated(true);

    if (formIsValid && form.checkValidity() === true) {
      // Form is valid and ready to be submitted
      console.log('Form submitted');
      return true;
    } else {
      event.stopPropagation();
      return false;
    }
  };

  const confirmUniqueFields = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    let newErrors = {};
    let formIsValid = true;

    console.log('Checking for unique fields...');
    console.log('Token: ', tokenValid);
    console.log('Username: ', usernameTaken);
    console.log('Email: ', emailTaken);

    const provisionTokenError = validateProvisionToken();
    if (provisionTokenError) {
      newErrors.provisionToken = provisionTokenError;
      formIsValid = false;
    }

    const usernameError = validateUsername();
    if (usernameError) {
      newErrors.username = usernameError;
      formIsValid = false;
    }

    const emailError = validateEmail();
    if (emailError) {
      newErrors.email = emailError;
      formIsValid = false;
    }

    setErrors(newErrors);
    setValidated(true);

    if (formIsValid && form.checkValidity() === true) {
      // Form is valid and ready to be submitted
      console.log('Unique fields passed!');
      return true;
    } else {
      event.stopPropagation();
      return false;
    }
  };


  const handleSubmit = (event) => {
    if (validateFields(event)) {
      registerUser();

      // KEEP THIS LINE BELOW IN CASE YOU NEED IT LATER
      // const uniqueFieldsCheck = confirmUniqueFields(event);

      //MIGHT NEED IT LATER
      // if (uniqueFieldsCheck) {
      //   // Go to next registration page
      //   console.log('Go to next registration page');
      //   setInitialRegAccepted(true);
      // }
    }
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h2 className='d-flex justify-content-center'>LOGO</h2>
      </Link>
      <div className='d-flex justify-content-center'>
        <Link to="/login" className='p-1'>Login</Link>
        <Link to="/register" className='p-1'>Register</Link>
      </div>
      <div className='container-lg'>
        <Form className='bg-dark text-white p-3' noValidate validated={validated} onSubmit={handleSubmit}>
          
        <Form.Group className='mb-3' md="4" controlId="validationCustom00">
            <Form.Label>Provision Token</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Token"
              value={provisionToken}
              onChange={(e) => setProvisionToken(e.target.value)}
              isInvalid={!!errors.provisionToken}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.provisionToken || 'Please provide a token received from an admin'}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className='mb-3' md="4" controlId="validationCustom01">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.username || 'Please choose a username'}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' md="4" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.email || 'Please provide an email'}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' md="4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password || 'Please provide a password'}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' md="4" controlId="validationCustom04">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              isInvalid={!!errors.passwordConfirm}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.passwordConfirm || 'Please confirm password'}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Submit form</Button>
        </Form>
      </div>
      <p className='d-flex justify-content-center'>- or -</p>
      <div className='d-flex justify-content-center'>
        <button>Sign up with StartGG</button>
      </div>
    </div>
  );
}

export default InitialRegistration;
