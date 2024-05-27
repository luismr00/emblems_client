import React, {useEffect} from 'react'
import Navigation from '../components/Navigation';
import TestWidgetsDnD from '../components/DnD_Tests/TestWidgetsDnD';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const Home = () => {

  const logStatus = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const isLogged = () => {
    if (!logStatus) {
      navigate('/login');
    }
  }

  useEffect(() => {
    isLogged();
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