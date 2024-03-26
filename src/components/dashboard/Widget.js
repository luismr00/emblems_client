import React from 'react'

const Widget = (props) => {

  let bgColor = false

  return (
    <div className='rounded-2 mb-5 w-30 ms-3 me-3'>
        <div className='bg-primary rounded-top d-flex justify-content-center align-items-center' style={{height: '75px'}}>
            <h3 className='text-center text-white'>Rising Players</h3>
        </div>
        <div className='bg-info d-flex justify-content-center align-items-center' style={{height: '55px'}}>
            <p className='text-center text-white'>Filters</p>
        </div>
        <div>
            {props.data.map((data, index) => {
                return (
                    <div className={'d-flex ' + (index % 2 === 0 ? "bg-white" : "bg-dark-subtle")} style={{height: '75px'}}>
                        <img
                            // className='rounded-3'
                            src='https://images.start.gg/images/user/11492/image-3dd9789eb28e9bef8b6f8b572dd23389.jpeg?ehk=yWoe%2B5bbozHkCky6qBhZxdf8SPxOjJkqVd4FM9xcjts%3D&ehkOptimized=1vKUZGZtc7wtkl4zLyUzd9JhAoO1sJ5RzQSvqHc61EA%3D'
                            style={{maxWidth: '85px', height: '75px'}}
                        ></img>
                        <div className='flex-grow-1 d-flex flex-column justify-content-between p-2'>
                            <h4>{data.player}</h4>
                            <div className='d-flex justify-content-between'>
                                <p>{data.info[0]}</p>
                                <p className='text-primary'>{data.info[1]}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className='d-flex bg-white justify-content-center align-items-center rounded-bottom' style={{height: '75px'}}>
            <button type='button' className='btn btn-info' style={{height: '45px'}}>View More</button>
        </div>
    </div>
  )
}

export default Widget