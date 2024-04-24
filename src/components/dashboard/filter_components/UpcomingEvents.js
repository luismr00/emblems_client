import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import Select from 'react-select'

const TrackedPlayers = ({setEditFilters}) => {
  return (
    <div className='text-white p-3 d-flex flex-column h-100'>  
        <div className="flex-grow-1">
            <h5 className='mb-1'>Game</h5>
            <Select className='mb-2'/>

            <h5 className='mb-1'>Date</h5>
            <div className='d-flex justify-content-between align-items-center mb-2'>
                <p>Between</p>
                <DatePicker slotProps={{ textField: { size: 'small' } }} className='w-35 bg-white rounded'/>
                <p>and</p>
                <DatePicker slotProps={{ textField: { size: 'small' } }} className='w-35 bg-white rounded'/>
            </div>

            <div className='d-flex justify-content-between mb-1'>
                <h5>Region</h5>
                <div>
                    <label for="scales">Online?</label>
                    <input className='ms-1' type="checkbox" id="scales" name="scales" />
                </div>
            </div>
            <div className='d-flex justify-content-between mb-2'>
                <Select className='w-30'/>
                <Select className='w-30 ms-2 me-2'/>
                <Select className='w-30'/>
            </div>

            <div className='d-flex justify-content-between mb-1'>
                <h5>Tier</h5>
                <div>
                    <label for="scales">Higher Tiers?</label>
                    <input className='ms-1' type="checkbox" id="scales" name="scales" />
                </div>
            </div>
            <Select className='mb-3'/>            
        </div>
        <div className='d-flex '>
            <button className='btn btn-success w-50 me-1'>Confirm</button>
            <button className='btn btn-danger w-50 ms-1' onClick={() => setEditFilters(false)}>Cancel</button>
        </div>
    </div>
  )
}

export default TrackedPlayers