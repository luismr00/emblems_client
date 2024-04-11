import React from 'react'
import RisingPlayers from './filter_components/RisingPlayers'
import TopEmblems from './filter_components/TopEmblems'
import UpcomingEvents from './filter_components/UpcomingEvents'
import RecentUpsets from './filter_components/RecentUpsets'

const Filters = ({id, setEditFilters}) => {
  return (
    <div>
        {id === 1 ? (
            <RisingPlayers setEditFilters={setEditFilters}/>
        ) : id === 2 ? (
            <TopEmblems setEditFilters={setEditFilters}/>
        ) : id === 3 ? (
            <UpcomingEvents setEditFilters={setEditFilters}/>
        ) : (
            <RecentUpsets setEditFilters={setEditFilters}/>
        )}
    </div>
  )
}

export default Filters