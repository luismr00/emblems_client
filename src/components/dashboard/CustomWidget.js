import React from 'react'

const CustomWidget = ({handleEditClick, handleCancelSortable, isEditMode}) => {
  return (
    <div className='bg-white rounded-2 mb-4 w-30 ms-3 me-3'>
      {isEditMode ? (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '505px'}}>
        <button type='button' className='btn btn-dark w-50 mt-2 mb-2' onClick={() => {handleEditClick(); handleCancelSortable()}}>Cancel</button>
        <button type='button' className='btn btn-success w-50 mt-2 mb-2' >Save</button>
      </div>
      ) : (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '505px'}}>
        <button type='button' className='btn btn-info w-50 mt-2 mb-2' >Add Widget</button>
        <button type='button' className='btn btn-info w-50 mt-2 mb-2' onClick={() => handleEditClick()}>Edit Widget</button>
      </div>
      )}
    </div>
  )
}

export default CustomWidget