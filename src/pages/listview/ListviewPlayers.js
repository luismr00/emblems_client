import React, {useEffect, useState} from 'react'
import Navigation from '../../components/Navigation'
import PlayerRecord from '../../components/listview/PlayerRecord'
import { useNavigate } from 'react-router-dom';

const ListviewPlayers = () => {

    const [tab, setTab] = useState("Player Record");

    const navigate = useNavigate();

    const handleSearch = (type) => {
        if (type === "new") {
            navigate('/search');
        } else {
            // This is where you will attach the search parameters to the URL that you got from the search page
            // navigate('/search');
            console.log("Edit Search to be added soon");
        }
    }

    return (
        <div>
            <Navigation />
            <div className='container'>
                {/* <h1 className='text-center'>Listview All</h1> */}
                <div className='d-flex justify-content-center mt-5 mb-4'>
                    <button type='button' className='btn bg-info text-white rounded-0 ms-2 me-2' style={{width: '150px'}} onClick={() => handleSearch("new")}>New Search</button>
                    <button type='button' className='btn bg-info text-white rounded-0 ms-2 me-2' style={{width: '150px'}} onClick={() => handleSearch("edit")}>Edit Search</button>
                </div>

                <div className='text-center mb-3'>
                    <button type='button' className={tab === "Player Record" ? 'btn bg-primary text-white rounded-0 border-dark' : 'btn bg-secondary text-black rounded-0 border-dark'} style={{width: '215px'}} onClick={() => setTab("Player Record")}>Player Record</button>
                    <button type='button' className={tab === "Profile Details" ? 'btn bg-primary text-white rounded-0 border-dark' : 'btn bg-secondary text-black rounded-0 border-dark'} style={{width: '215px'}} onClick={() => setTab("Profile Details")}>Profile Details</button>
                    <button type='button' className={tab === "Emblem Info" ? 'btn bg-primary text-white rounded-0 border-dark' :'btn bg-secondary text-black rounded-0 border-dark'} style={{width: '215px'}} onClick={() => setTab("Emblem Info")}>Emblem Info</button>
                </div>

                {tab === "Player Record" && <PlayerRecord />}

            </div>
        </div>
    )
}

export default ListviewPlayers