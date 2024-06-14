import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InitialRegistration from '../components/registration/InitialRegistration';
import RegisterNext from '../components/registration/RegisterNext';
import { getCookie } from '../helpers/auth';

const Register = () => {

  {/* Leave this comment in case its needed again */}
  // const [initialRegAccepted, setInitialRegAccepted] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = () => {
    const checkCookie = getCookie('token');
    if(checkCookie) {
      navigate('/dashboard');
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])
  
  return (
    <>
      {/* Leave this comment in case its needed again */}
      {/* {initialRegAccepted ? <RegisterNext /> : <InitialRegistration setInitialRegAccepted={setInitialRegAccepted} /> } */}
      <InitialRegistration />
    </>
  )
}

export default Register