import React from 'react'
import Navigation from '../components/Navigation'
import Widget from '../components/dashboard/Widget';

const Dashboard = () => {

  const widgets = [
    [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            players: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            players: "Player 4",
            info: ["My Emblems", 3]
        },
    ],
    [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            players: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            players: "Player 4",
            info: ["My Emblems", 3]
        },
    ],
    [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            players: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            players: "Player 4",
            info: ["My Emblems", 3]
        },
    ],
    [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            players: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            players: "Player 4",
            info: ["My Emblems", 3]
        },
    ],
    
  ];

  return (
    <div>
        <Navigation />
        <div className='container'>
            <h2>Dashboard</h2>
            {widgets.map((widget_data) => {
                return (
                    <Widget data={widget_data}/>
                );
            })}
        </div>
    </div>
  )
}

export default Dashboard