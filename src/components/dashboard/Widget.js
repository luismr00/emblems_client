import React from 'react'

const Widget = (props) => {
  return (
    <div style={{width: "375px"}}>
        <div>
            <h3 className='text-center'>Rising Players</h3>
        </div>
        <div>
            <p>Filters</p>
        </div>
        <div>
            {props.data.map((data) => {
                return (
                    <div>
                        <p>image here</p>
                        <div>
                            <h4>{data.player}</h4>
                            <p>{data.info[0]}</p>
                            <p>{data.info[1]}</p>
                        </div>
                    </div>
                );
            })}
        </div>
        <div>
            <button>View More</button>
        </div>
    </div>
  )
}

export default Widget