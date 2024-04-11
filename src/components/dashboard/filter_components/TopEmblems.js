import React from 'react'
import Select from 'react-select'

const TopEmblems = ({setEditFilters}) => {
  return (
    <div className='text-white p-3 d-flex flex-column h-100'>  
        <div className="flex-grow-1">
            <h5 className='mb-1'>Game</h5>
            <Select className='mb-2'/>

            <h5 className='mb-1'>Value</h5>
            <div className='d-flex justify-content-between align-items-center mb-2'>
                <p>Between</p>
                <Select className='w-30'/>
                <p>and</p>
                <Select className='w-30'/>
            </div>

            <h5 className='mb-1'>Recent Value</h5>
            <div className='d-flex justify-content-between align-items-center mb-2'>
                <p>Between</p>
                <Select className='w-30'/>
                <p>and</p>
                <Select className='w-30'/>
            </div>

            <h5 className='mb-1'>Recent Amount</h5>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <p>Between</p>
                <Select className='w-30'/>
                <p>and</p>
                <Select className='w-30'/>
            </div>
        </div>
        <div className='d-flex '>
            <button className='btn btn-success w-50 me-1'>Confirm</button>
            <button className='btn btn-danger w-50 ms-1' onClick={() => setEditFilters(false)}>Cancel</button>
        </div>
    </div>
  )
}

export default TopEmblems