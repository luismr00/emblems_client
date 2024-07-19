import React, { useState } from 'react'
import Select from 'react-select'

const SearchPlayers = ({keyword}) => {

    const [game, setGame] = useState('');
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');
    const [stateProvince, setStateProvince] = useState('');
    const [character, setCharacter] = useState('');
    const [sort, setSort] = useState("ascending");

    const mock_options = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
    ];

    return (
        <div className='d-flex flex-column align-items-center '>
            {/* <h2 className='mb-2'>Game</h2> */}
            <h3 className='mb-2 text-left' style={{ width: '50%', textAlign: 'left' }}>Game</h3>
            <Select 
                className='mb-2 w-50' 
                options={mock_options} 
                onChange={(option) => setGame(option.label)}
                // styles={selectorStyles} 
                placeholder='Select option'
            /> 

            <h3 className='mb-2 text-left' style={{ width: '50%', textAlign: 'left' }}>Region</h3>
            <div className="d-flex justify-content-between" style={{width: '50%'}}>
                <Select 
                    className='mb-2 w-30'
                    options={mock_options} 
                    onChange={(option) => setRegion(option.label)}
                    // styles={selectorStyles} 
                    placeholder='Select region'
                /> 

                <Select 
                    className='mb-2 w-30' 
                    options={mock_options} 
                    onChange={(option) => setCountry(option.label)}
                    // styles={selectorStyles} 
                    placeholder={region ? 'Select country' : '-'}
                    isDisabled={region ? false : true}
                />

                <Select 
                    className='mb-2 w-35' 
                    options={mock_options} 
                    onChange={(option) => setCountry(option.label)}
                    // styles={selectorStyles} 
                    placeholder={country === 'Option 2' ? 'Select province' : country === 'Option 1' ? 'Select state' : '-'}
                    isDisabled={country ? false : true}
                />
            </div>
            
            <div className='d-flex justify-content-between' style={{width: '50%'}}>
                <h3 className='mb-2 text-left' style={{ width: '50%', textAlign: 'left' }}>character</h3>
                {/* checkbox */}
                <div className='d-flex p-2'>
                    <p className='pe-2'>Secondaries?</p>
                    <input type='checkbox' className='mr-2' />
                </div>
            </div>
            
            <Select 
                className='mb-2 w-50' 
                options={mock_options} 
                onChange={(option) => setCharacter(option.label)}
                // styles={selectorStyles} 
                placeholder='Select option'
            /> 

            <h3 className='mb-2 text-left' style={{ width: '50%', textAlign: 'left' }}>Ban Status</h3>
            <div className='d-flex justify-content-between mb-2' style={{width: '50%'}}>
                <div className='d-flex'>
                    <p className='pe-2'>Clear</p>
                    <input type='checkbox' className='' />
                </div>
                <div className='d-flex'>
                    <p className='pe-2'>Warning</p>
                    <input type='checkbox' className='' />
                </div>
                <div className='d-flex'>
                    <p className='pe-2'>Enforced</p>
                    <input type='checkbox' className='' />
                </div>
            </div>

            <h3 className='mb-2 text-left' style={{ width: '50%', textAlign: 'left' }}>Sort By</h3>
            <div className='d-flex justify-content-between' style={{width: '50%'}}>
                <input type='text' className='form-control mb-3 bg-white rounded-0 w-50' placeholder='Score' />
                <div className='d-flex'>
                    <button type='button' className={sort === 'ascending' ? 'btn bg-primary border-black text-white rounded-0' : 'btn bg-secondary border-black text-black rounded-0'} style={{height: '37px', width: '150px'}} onClick={() => setSort('ascending')}>Ascending</button>
                    <button type='button' className={sort === 'descending' ? 'btn bg-primary border-black text-white rounded-0' : 'btn bg-secondary border-black text-black rounded-0'} style={{height: '37px', width: '150px'}} onClick={() => setSort('descending')}>Descending</button>
                </div>
            </div>


            <button type='button' className='btn bg-info text-white rounded-0 ' style={{width: '100px'}}>Search</button>
        </div>
    )
}

export default SearchPlayers