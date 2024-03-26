import React from 'react'
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
        <Navigation />
        <div className=''>
          <p>Home</p>
        </div>
    </div>
  )
}

export default Home