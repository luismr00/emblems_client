import React from 'react'
import {trendingPlayers} from '../../mock/trendingPlayersData'

// export default trendingPlayers;

const TrendingPlayers = () => {
  return (
    <div>
        <div className='container'>
            <div className='col'>
                {trendingPlayers.map((player) => {
                    return (
                        <div className='col-md-6 w-100'>
                            <div className='parent-div d-flex flex-row justify-content-between bg-light'>
                                <img src={player.startgg_image} className="img-fluid img-thumbnail" style={{maxWidth: '150px'}}></img>
                                <p className=''>{player.playerTag}</p>
                                <p className=''>{player.country}</p>
                                <p className=''>{player.no_events_participated}</p>
                                <p className=''>{player.win_loss_ratio}</p>
                                <p className=''>more info</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default TrendingPlayers;