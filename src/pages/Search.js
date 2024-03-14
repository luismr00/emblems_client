import React from 'react'
import Navigation from '../components/Navigation'
import { useSearchParams } from 'react-router-dom'

const Search = () => {

  //missing
    //create array of players and use a player component
      //use trendingPlayers component and rename it for future use
    //create array of random events
    //conditionally render whether results where found or not for both player and event search


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
        <div>Search</div>
        <h3>Searching for the keyword: {keyword}</h3>
    </div>
  )
}

export default Search