import React, {useEffect, useState} from 'react'
import Navigation from '../../components/Navigation'

const ListviewPlayers = () => {

    const [next, setNext] = useState(1);

    const mock_data = [
        {
            tag: 'Tag 1',
            game: 'Game 1',
            score: 'Score 1',
            rank: 'Rank 1',
            region: 'Region 1',
            characters: 'Characters 1',
            startgg: 'StartGG 1'
        },
        // add 14 more objects with the same properties as the object above
        {
            tag: 'Tag 2',
            game: 'Game 2',
            score: 'Score 2',
            rank: 'Rank 2',
            region: 'Region 2',
            characters: 'Characters 2',
            startgg: 'StartGG 2'
        },
        {
            tag: 'Tag 3',
            game: 'Game 3',
            score: 'Score 3',
            rank: 'Rank 3',
            region: 'Region 3',
            characters: 'Characters 3',
            startgg: 'StartGG 3'
        },
        {
            tag: 'Tag 4',
            game: 'Game 4',
            score: 'Score 4',
            rank: 'Rank 4',
            region: 'Region 4',
            characters: 'Characters 4',
            startgg: 'StartGG 4'
        },
        {
            tag: 'Tag 5',
            game: 'Game 5',
            score: 'Score 5',
            rank: 'Rank 5',
            region: 'Region 5',
            characters: 'Characters 5',
            startgg: 'StartGG 5'
        },
        {
            tag: 'Tag 6',
            game: 'Game 6',
            score: 'Score 6',
            rank: 'Rank 6',
            region: 'Region 6',
            characters: 'Characters 6',
            startgg: 'StartGG 6'
        },
        {
            tag: 'Tag 7',
            game: 'Game 7',
            score: 'Score 7',
            rank: 'Rank 7',
            region: 'Region 7',
            characters: 'Characters 7',
            startgg: 'StartGG 7'
        },
        {
            tag: 'Tag 8',
            game: 'Game 8',
            score: 'Score 8',
            rank: 'Rank 8',
            region: 'Region 8',
            characters: 'Characters 8',
            startgg: 'StartGG 8'
        },
        {
            tag: 'Tag 9',
            game: 'Game 9',
            score: 'Score 9',
            rank: 'Rank 9',
            region: 'Region 9',
            characters: 'Characters 9',
            startgg: 'StartGG 9'
        },
        {
            tag: 'Tag 10',
            game: 'Game 10',
            score: 'Score 10',
            rank: 'Rank 10',
            region: 'Region 10',
            characters: 'Characters 10',
            startgg: 'StartGG 10'
        },
        {
            tag: 'Tag 11',
            game: 'Game 11',
            score: 'Score 11',
            rank: 'Rank 11',
            region: 'Region 11',
            characters: 'Characters 11',
            startgg: 'StartGG 11'
        },
        {
            tag: 'Tag 12',
            game: 'Game 12',
            score: 'Score 12',
            rank: 'Rank 12',
            region: 'Region 12',
            characters: 'Characters 12',
            startgg: 'StartGG 12'
        },
        {
            tag: 'Tag 13',
            game: 'Game 13',
            score: 'Score 13',
            rank: 'Rank 13',
            region: 'Region 13',
            characters: 'Characters 13',
            startgg: 'StartGG 13'
        },
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
                    <button type='button' className='btn bg-info text-white rounded-0 ms-2 me-2' style={{width: '150px'}}>New Search</button>
                    <button type='button' className='btn bg-info text-white rounded-0 ms-2 me-2' style={{width: '150px'}}>Edit Search</button>
                </div>

                {/* Apply a grid with the use of bootstrap that takes 3 different cols: search result, type, and info */}
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center' style={{width: '80%'}}>
                        <div className='border-start border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Tag</h4>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Game</h4>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Score</h4>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Rank</h4>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Region</h4>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Characters</h4>
                        </div>
                        <div className='border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>StartGG</h4>
                        </div>
                    </div>
                </div>

                {handleList().map((data, index) => {
                    return (
                        <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center' style={{width: '80%'}}>
                        <div className='border-start border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.tag}</p>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.game}</p>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.score}</p>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.rank}</p>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.region}</p>
                        </div>
                        <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.characters}</p>
                        </div>
                        <div className='border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left'}}>
                            <p className='text-left bg-white text-black ps-3 pt-2 pb-2'>{data.startgg}</p>
                        </div>
                    </div>
                </div>
                    )}
                )}

                {/* add a prev button, the next state, and a next button to control the pagination */}
                <div className='d-flex justify-content-center mt-4'>
                    <button type='button' className='btn bg-info text-white rounded-0 me-4' style={{width: '80px'}} onClick={handlePrev}>&#8592;</button>
                    <p className='mt-2'>{next} of {numberOfPages}</p>
                    <button type='button' className='btn bg-info text-white rounded-0 ms-4' style={{width: '80px'}} onClick={handleNext}>&#8594;</button>
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

export default ListviewPlayers