import React from 'react'
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import TestWidgetsDnD from '../components/DnD_Tests/TestWidgetsDnD';

const Home = () => {
  return (
    <div>
        {/* <Navigation /> */}
        <TestWidgetsDnD />
        {/* <div className=''>
          <p>Home</p>
        </div> */}
    </div>
  )
}

export default Home