import React from 'react'
import Navigation from '../components/Navigation'
import { useSearchParams } from 'react-router-dom'

const Search = () => {

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


  let keyword = ""
  const [searchParams] = useSearchParams();
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    keyword = value;
    console.log(param, value);
  }
  return (
    <div>
        <Navigation />
        <h3>found results for players that contain the keyword x</h3>
        {ps.map((player) => {
          if(player.includes(keyword))
          return (
            <p>{player}</p>
          );
        })}
        {/* <h3>Searching for the keyword: {keyword}</h3> */}
        <h3>found results for events that contain the keyword x</h3>
        {pe.map((event) => {
          if(event.includes(keyword))
          return (
            <p>{event}</p>
          );
        })}
    </div>
  )
}

export default Search