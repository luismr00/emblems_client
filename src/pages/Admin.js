import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { getCookie } from '../helpers/auth';
import { useNavigate } from 'react-router-dom';
import { API_PREFIX } from '../config';

const Admin = () => {

    const [access, setAccess] = useState(false);
    const [email, setEmail] = useState('');
    const [provisionToken, setProvisionToken] = useState('');

    const navigate = useNavigate();

    const validateEmail = () => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.trim() === '') {
          return 'Email is required';
        }
        if (!pattern.test(email)) {
          return 'Email is invalid';
        }
        return '';
    };

    const getRole = async (token) => {
        const response = await fetch(`${API_PREFIX}/user/Session.php`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await response.json();
        if(data.status === 'success' && data.message.admin === true) {
            setAccess(true);
        } else {
            setAccess(false);
            console.log(data);
        }
    }

    const isLoggedIn = () => {
        const token = getCookie('token');
        if(!token) {
          navigate('/login');
        } else {
            console.log('Cookie found. Checking role.');
            getRole(token);
        }
    }

    const ProvideUser = async (token) => {
        console.log('Providing user');
        const response = await fetch(`${API_PREFIX}/user/ProvisionUser.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({email: email})
        });

        const data = await response.json();
        if(data.status === 'success') {
            console.log('Token provisioned');
            setProvisionToken(data.message);
        } else {
            alert('Unable to provision token. Check dev tools for more info.');
            console.log(data);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = getCookie('token');
        const isValidEmail = validateEmail();

        console.log(token, email, isValidEmail);

        if(isValidEmail === '') {
            console.log('Valid email. Proceeding to provision token.');
            ProvideUser(token);
        } else {
            alert(isValidEmail);
        }

    }

    // must check if a cookie is there. If not, redirect. If yes, get the role and display the page accordingly.
    useEffect(() => {
        isLoggedIn();
    } ,[]);

    const testSubmit = (event) => {
        event.preventDefault();
        console.log('Test submit');
    }

  return (
    <div>
        <Navigation />
        {!access ? <div>Access Denied</div> : 
        <div>
            <h1>Welcome</h1>
            <p>Only admins can see this page.</p>
            <br></br>
            <h5>Provision user sign in</h5>
            <p>Enter an email to provide a user with a token to signin</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" style={{width: '500px'}} onChange={e => setEmail(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            <br></br>
            <br></br>
            <h5>Provision token: {provisionToken}</h5>
        </div>}
    </div>
  )
}

export default Admin