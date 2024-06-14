import React, {useEffect} from 'react'
import Navigation from '../components/Navigation';
import TestWidgetsDnD from '../components/DnD_Tests/TestWidgetsDnD';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getCookie } from '../helpers/auth';

const Home = () => {

  // const logStatus = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const isLoggedIn = () => {
    // OLD CODE
    // if (!logStatus) {
    //   navigate('/login');
    // }
    const checkCookie = getCookie('token');
    if(!checkCookie) {
      navigate('/login');
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <div>
        <Navigation />
        {/* <TestWidgetsDnD /> */}
        <div className=''>
          <p>Home</p>
        </div>
    </div>
  )
}

export default Home