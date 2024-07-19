import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import { useSearchParams } from 'react-router-dom'
import SearchEvents from '../components/search/SearchEvents'
import SearchAll from '../components/search/SearchAll'
import SearchPlayers from '../components/search/SearchPlayers'

const Search = () => {

  const [tab, setTab] = useState("all");

  //missing
    //create array of players and use a player component
      //use trendingPlayers component and rename it for future use
    //create array of random events
    //conditionally render whether results where found or not for both player and event search

  const ps = [
    "cherry",
    "mechanism",
    "development",
    "temple",
    "golf",
    "systematic",
    "impulse",
    "seller",
    "depend",
    "revise",
    "epicalyx",
    "petty",
    "tax",
    "hook",
    "duck",
    "constituency",
    "respect",
    "governor",
    "scholar",
    "dragon",
    "smashboxplayer",
  ];

  const pe = [
    "buy",
    "chord",
    "church",
    "monk",
    "cold",
    "bold",
    "pray",
    "tie",
    "breakdown",
    "outfit",
    "perfume",
    "kill",
    "harbor",
    "construct",
    "fine",
    "drawer",
    "promotion",
    "punch",
    "extraterrestrial",
    "toll",
    "smash",
    "smashnsplash"
  ];

  const [keyword, setKeyword] = useState('');
  const [searchParams] = useSearchParams();
  
  // let k = ""
  // const [searchParams] = useSearchParams();
  // for (const entry of searchParams.entries()) {
  //   const [param, value] = entry;
  //   k = value;
  //   console.log(param, value);
  // }

  useEffect(() => {
    // Assuming the search parameter you're interested in is named 'keyword'
    const keywordValue = searchParams.get('keyword');
    if (keywordValue) {
      setKeyword(keywordValue);
    }
  }, []);

  return (
    <div>
        <Navigation />
        {/* <h3>found results for players that contain the keyword x</h3>
        {ps.map((player) => {
          if(player.includes(keyword))
          return (
            <p>{player}</p>
          );
        })}
        <h3>found results for events that contain the keyword x</h3>
        {pe.map((event) => {
          if(event.includes(keyword))
          return (
            <p>{event}</p>
          );
        })} */}
        <div className='container'>
          <h2 className='text-center mt-4 mb-4'>Search</h2>
          
          {/* Add a large input field with the background being white inside, width of 50%, centered. Style with bootstrap. */}
          <div className='d-flex flex-row justify-content-center'>
            <input type='text' value={keyword} className='form-control mb-3 bg-white rounded-0 w-50' placeholder='Search' onChange={(e) => setKeyword(e.target.value)} />
          </div>
          
          
          {/* create three buttons that act as tabs for All, Players and Events, and depending which one is clicked will change the state of tabs */}

          <div className='text-center mb-3'>
          <button type='button' className={tab === "all" ? 'btn bg-primary text-white rounded-0 border-dark' : 'btn bg-secondary text-black rounded-0 border-dark'} style={{width: '215px'}} onClick={() => setTab("all")}>All</button>
          <button type='button' className={tab === "players" ? 'btn bg-primary text-white rounded-0 border-dark' : 'btn bg-secondary text-black rounded-0 border-dark'} style={{width: '215px'}} onClick={() => setTab("players")}>Players</button>
          <button type='button' className={tab === "events" ? 'btn bg-primary text-white rounded-0 border-dark' :'btn bg-secondary text-black rounded-0 border-dark'} style={{width: '215px'}} onClick={() => setTab("events")}>Events</button>
          </div>

          {/* depending on which tab is clicked, render the corresponding component */}
          {tab === "all" && <SearchAll keyword={keyword} />}
          {tab === "players" && <SearchPlayers keyword={keyword}/>}
          {tab === "events" && <SearchEvents keyword={keyword}/>}

        </div>

    </div>
  )
}

export default Search