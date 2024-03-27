import React from 'react'

const CustomWidget = () => {
  return (
    <div className='bg-white d-flex justify-content-center flex-column align-items-center rounded-2 mb-4 w-30 ms-3 me-3' style={{height: '505px'}}>
        <button type='button' className='btn btn-info btn-lg mt-2 mb-2' >Add Widget</button>
        <button type='button' className='btn btn-info btn-lg mt-2 mb-2' >Edit Widget</button>
    </div>
  )
}

export default CustomWidget