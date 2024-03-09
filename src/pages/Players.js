import React from 'react'
import Navigation from '../components/Navigation'
import TrendingPlayers from '../components/players/TrendingPlayers'

const Players = () => {
  return (
    <div>
        <Navigation />
        <div className='container'>
          <h1>Trending players</h1>
            <div className='col'>
                <div className='col-md-6 w-100'>
                  <div className='parent-div d-flex flex-row justify-content-between bg-light'>
                    <p className=''>Player</p>
                    <p className=''>Country</p>
                    <p className=''>No. of events</p>
                    <p className=''>Win/Loss</p>
                    <p className=''>more info</p>
                  </div>
                </div>
            </div>
          </div>
        <TrendingPlayers />
    </div>
  )
}

export default Players