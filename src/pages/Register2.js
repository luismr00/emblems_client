import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import RegisterNext from '../components/registration/RegisterNext'
import { getCookie, isAuth } from '../helpers/auth';
import { useNavigate } from "react-router-dom";

const Register2 = () => {

    const navigate = useNavigate();

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
            console.log('User details found. Redirecting to dashboard.');
            console.log(data.message);
            console.log(id);
            // navigate('/dashboard');
          } else {
            console.log('User details is missing and allowed to proceed with this page.');
          }
        } else {
          console.log('Unable to fetch userDetails. Check dev tools for more info. Add a redirect anyway here.');
          console.log(data);
        }
    }

    useEffect(() => {
        const authenticated = isAuth();
        // fetch token and user_id from autheticated object
        const { token, user_id } = authenticated;
        if(token && user_id) {
            getUserDetails(token, user_id);
        } else {
            navigate('/login');
        }
    },[]);

  return (
    <>
        <RegisterNext />
    </>
  )
}

export default Register2