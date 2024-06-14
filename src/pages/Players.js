import React, {useEffect} from 'react'
import Navigation from '../components/Navigation'
import PlayerPH from '../components/PlayerPH'
import PlayerFilters from '../components/players/PlayerFilters'
import { trendingPlayers } from '../mock/trendingPlayersData'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getCookie } from '../helpers/auth';

const Players = () => {

  // const logStatus = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const isLoggedIn = () => {
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
        <div className='container'>
          <PlayerFilters />
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
        <PlayerPH players={trendingPlayers} />
    </div>
  )
}

export default Players