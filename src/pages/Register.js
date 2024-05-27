import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InitialRegistration from '../components/registration/InitialRegistration';
import RegisterNext from '../components/registration/RegisterNext';

const Register = () => {

  const [initialRegAccepted, setInitialRegAccepted] = useState(false);
  
  return (
    <>
      {initialRegAccepted ? <RegisterNext /> : <InitialRegistration setInitialRegAccepted={setInitialRegAccepted} /> }
    </>
  )
}

export default Register