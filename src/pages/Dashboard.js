import React from 'react'
import Navigation from '../components/Navigation'
import Widget from '../components/dashboard/Widget';
import CustomWidget from '../components/dashboard/CustomWidget';

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
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
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
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
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
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
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
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
            info: ["My Emblems", 3]
        },
    ],
    
  ];

  return (
    <div>
        <Navigation />
        <div className='container'>
            <h2 className='text-center mt-4 mb-4'>Dashboard</h2>
            <div className='d-flex flex-wrap '>
                {widgets.map((widget_data) => {
                    return (
                        <Widget data={widget_data}/>
                    );
                })}
                <CustomWidget />
            </div>
        </div>
    </div>
  )
}

export default Dashboard