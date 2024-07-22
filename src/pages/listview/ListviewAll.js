import React, {useEffect, useState} from 'react'
import Navigation from '../../components/Navigation'
import { useNavigate } from 'react-router-dom';

const ListviewAll = () => {

    const [next, setNext] = useState(1);

    const navigate = useNavigate();

    const mock_data = [
        {
            search_result: 'Result 1',
            type: 'Type 1',
            info: 'Info 1'
        },
        {
            search_result: 'Result 2',
            type: 'Type 2',
            info: 'Info 2'
        },
        {
            search_result: 'Result 3',
            type: 'Type 3',
            info: 'Info 3'
        },
        {
            search_result: 'Result 4',
            type: 'Type 4',
            info: 'Info 4'
        },
        {
            search_result: 'Result 5',
            type: 'Type 5',
            info: 'Info 5'
        },
        {
            search_result: 'Result 6',
            type: 'Type 6',
            info: 'Info 6'
        },
        {
            search_result: 'Result 7',
            type: 'Type 7',
            info: 'Info 7'
        },
        {
            search_result: 'Result 8',
            type: 'Type 8',
            info: 'Info 8'
        },
        {
            search_result: 'Result 9',
            type: 'Type 9',
            info: 'Info 9'
        },
        {
            search_result: 'Result 10',
            type: 'Type 10',
            info: 'Info 10'
        },
        {
            search_result: 'Result 11',
            type: 'Type 11',
            info: 'Info 11'
        },
        {
            search_result: 'Result 12',
            type: 'Type 12',
            info: 'Info 12'
        },
        {
            search_result: 'Result 13',
            type: 'Type 13',
            info: 'Info 13'
        },
        {
            search_result: 'Result 14',
            type: 'Type 14',
            info: 'Info 14'
        },
        {
            search_result: 'Result 15',
            type: 'Type 15',
            info: 'Info 15'
        }
    ];

    const handleNext = () => {
        setNext(next + 1);
    }

    const handlePrev = () => {
        setNext(next - 1);
    }

    const handleList = () => {
        return mock_data.slice((next - 1) * 10, next * 10);
    }

    const handleSearch = (type) => {
        if (type === "new") {
            navigate('/search');
        } else {
            // This is where you will attach the search parameters to the URL that you got from the search page
            // navigate('/search');
            console.log("Edit Search to be added soon");
        }
    }

    useEffect(() => {
        handleList();
    }, [next]);

    const numberOfPages = Math.ceil(mock_data.length / 10);

    return (
        <div>
            <Navigation />
            <div className='container'>
                {/* <h1 className='text-center'>Listview All</h1> */}
                <div className='d-flex justify-content-center mt-5 mb-4'>
                    <button type='button' className='btn bg-info text-white rounded-0 ms-2 me-2' style={{width: '150px'}} onClick={() => handleSearch("new")}>New Search</button>
                    <button type='button' className='btn bg-info text-white rounded-0 ms-2 me-2' style={{width: '150px'}} onClick={() => handleSearch("edit")}>Edit Search</button>
                </div>

                {/* Apply a grid with the use of bootstrap that takes 3 different cols: search result, type, and info */}
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center' style={{width: '80%'}}>
                        <div className='border-start border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Search Result</h4>
                        </div>
                        <div className='border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Type</h4>
                        </div>
                        <div className='border-start border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Info</h4>
                        </div>
                    </div>
                </div>

                {handleList().map((data, index) => {
                    return (
                        <div className='d-flex justify-content-center'>
                            <div className='d-flex justify-content-center' style={{width: '80%'}}>
                                <div className='border-end border-start border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                                    <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.search_result}</p>
                                </div>
                                <div className='border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                                    <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.type}</p>
                                </div>
                                <div className='border-start border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                                    <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.info}</p>
                                </div>
                            </div>
                        </div>
                    )}
                )}

                {/* add a prev button, the next state, and a next button to control the pagination */}
                <div className='d-flex justify-content-center mt-4'>
                    <button type='button' className='btn bg-info text-white rounded-0 me-4' style={{width: '80px'}} onClick={handlePrev} disabled={next === 1}>&#8592;</button>
                    <p className='mt-2'>{next} of {numberOfPages}</p>
                    <button type='button' className='btn bg-info text-white rounded-0 ms-4' style={{width: '80px'}} onClick={handleNext} disabled={next === numberOfPages}>&#8594;</button>
                </div>

                {/* <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center' style={{width: '80%'}}>
                        <div className='border-end border-start border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>Search Result</p>
                        </div>
                        <div className='border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>Type</p>
                        </div>
                        <div className='border-start border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>Info</p>
                        </div>
                    </div>
                </div> */}
                {/* <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center' style={{width: '80%'}}>
                        <p className='text-left' style={{width: '33%', textAlign: 'left'}}>Result 1</p>
                        <p className='text-left' style={{width: '33%', textAlign: 'left'}}>Type 1</p>
                        <p className='text-left' style={{width: '33%', textAlign: 'left'}}>Info 1</p>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default ListviewAll