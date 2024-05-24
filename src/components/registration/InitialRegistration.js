// import React, {useState} from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';

// const InitialRegistration = () => {

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordConfirm, setPasswordConfirm] = useState('');
//     const [validated, setValidated] = useState(false);
//     const [errors, setErrors] = useState([]);

//     const validateUsername = () => {
//       // create a regex pattern to check if the username is valid. Username should only contain letters, numbers, underscores, hyphens, and periods 
//       // and should be between 3 and 20 characters long
//       const pattern = /^[a-zA-Z0-9_.-]{3,20}$/;
//       return pattern.test(username);   
//     }

//     const validateEmail = () => {
//       // create a regex pattern to check if the email is valid
//       const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       return pattern.test(email);
//     }

//     const validatePassword = () => {
//       // create a regex pattern to check if the password is valid. Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character
//       // ensure that the regex includes at least 3 of the 4 conditions above
//       // ensure that the password is at least 8 characters long and at most 20 characters long
//       const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
//       return pattern.test(password);
//     }

//     const validatePasswordConfirm = () => {
//       return password === passwordConfirm;
//     }

//     const validateFields = () => {

//       // setErrors([]);
//       console.log('validating fields');
//       let err = [];

//       if(!validateUsername())
//         err = [...err, 'Username should be between 3 and 20 characters long and should only contain letters, numbers, underscores, hyphens, and periods'];
//       if(!validateEmail())
//         err = [...err, 'Email is invalid'];
//       if(!validatePassword())
//         err = [...err, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character and should be between 8 and 20 characters long'];
//       if(!validatePasswordConfirm())
//         err = [...err, 'Passwords do not match'];

//       console.log(err);
//       setErrors(err);

//       // if(!validateUsername() || !validateEmail() || !validatePassword() || !validatePasswordConfirm())
//       //   setErrors(true);
//       // else
//       //   setErrors(false);
//     }

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         // event.preventDefault();
//         event.stopPropagation();
//       } 

//       setValidated(true);

//       if (username != '' || email != '' || password != '' || passwordConfirm != '') 
//         validateFields();

//     };

//     return (
//         <div>
//           <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
//             <h2 className='d-flex justify-content-center'>LOGO</h2>
//           </Link>
//           <div className='d-flex justify-content-center'>
//             <Link to="/login" className='p-1'>Login</Link>
//             <Link to="/register" className='p-1'>Register</Link>
//           </div>
//           <div className='container-lg'>
//           <div className={` ${errors.length ? "d-block" : "d-none"} `} >
//             <h3>Validation Errors</h3>
//             <p className='mb-4'>Please correct the following areas</p>
//             <ul>
//               {errors.map((error, index) => {
//                 return <li key={index}>{error}</li>
//               })}
              
//             </ul>
//           </div>
//           <Form className='bg-dark text-white p-3' noValidate validated={validated} onSubmit={handleSubmit}>
//             {/* <Row className="mb-3"> */}
//               <Form.Group className='mb-3' md="4" controlId="validationCustom01">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   placeholder="Username"
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <Form.Control.Feedback type='invalid'>Please choose a username</Form.Control.Feedback>
//               </Form.Group>
              
//               <Form.Group className='mb-3' md="4" controlId="validationCustom02">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   placeholder="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Form.Control.Feedback type='invalid'>Please provide an email</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className='mb-3' md="4" controlId="validationCustom02">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   required
//                   type="password"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Form.Control.Feedback type='invalid'>Please provide a password</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className='mb-3' md="4" controlId="validationCustom02">
//                 <Form.Label>Confirm Password</Form.Label>
//                 <Form.Control
//                   required
//                   type="password"
//                   placeholder="Confirm Password"
//                   onChange={(e) => setPasswordConfirm(e.target.value)}
//                 />
//                 <Form.Control.Feedback type='invalid'>Please confirm password</Form.Control.Feedback>
//               </Form.Group>

              
//             <Button type="submit">Submit form</Button>
//           </Form>
//             {/* <Form className='bg-dark text-white p-3'>
//               <Form.Group className="mb-3" controlId="formUsername">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control type="text" placeholder="Enter username" required/>
//               </Form.Group>
    
//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" required/>
//               </Form.Group>
    
//               <Form.Group className="mb-3" controlId="formPassword" >
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" required />
//               </Form.Group>
    
//               <Form.Group className="mb-3" controlId="formPasswordConfirm">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Confirm password" required />
//               </Form.Group>
    
//               <Button variant="primary" type="submit" onClick={handleSubmit}>
//                 Submit
//               </Button>
//             </Form> */}
//           </div>
//           <p className='d-flex justify-content-center'>- or -</p>
//           <div className='d-flex justify-content-center'>
//             <button>Sign up with StartGG</button>
//           </div>
//         </div>
//     )
// }

// export default InitialRegistration


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const InitialRegistration = ({setInitialRegAccepted}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  
  let emailTaken = false;
  let usernameTaken = false;

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

  const registerUser = () => {
    // Register user fetch function here

    // Mock response -> if email or username is taken then set to true else set to false
    emailTaken = false;
    usernameTaken = false;
  };

  const validateFields = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    let newErrors = {};
    let formIsValid = true;

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
    console.log('Username: ', usernameTaken);
    console.log('Email: ', emailTaken);

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
      const uniqueFieldsCheck = confirmUniqueFields(event);

      if (uniqueFieldsCheck) {
        // Go to next registration page
        console.log('Go to next registration page');
        setInitialRegAccepted(true);
      }
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
