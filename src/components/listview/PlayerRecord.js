import React from 'react'
import { useEffect, useState } from 'react'
import Navigation from '../Navigation'

// const mock_data = [
//     {
//         tag: 'Tag 1',
//         game: 'Game 100',
//         score: 'Score 1',
//         rank: 'Rank 1',
//         region: 'Region 1',
//         characters: 'Characters 1',
//         startgg: 'StartGG 1'
//     },
//     // add 14 more objects with the same properties as the object above
//     {
//         tag: 'Tag 2',
//         game: 'Came 2',
//         score: 'Score 2',
//         rank: 'Rank 2',
//         region: 'Region 2',
//         characters: 'Characters 2',
//         startgg: 'StartGG 2'
//     },
//     {
//         tag: 'Tag 3',
//         game: 'Game 3',
//         score: 'Score 3',
//         rank: 'Rank 3',
//         region: 'Region 3',
//         characters: 'Characters 3',
//         startgg: 'StartGG 3'
//     },
//     {
//         tag: 'Tag 4',
//         game: 'Game 4',
//         score: 'Score 4',
//         rank: 'Rank 4',
//         region: 'Region 4',
//         characters: 'Characters 4',
//         startgg: 'StartGG 4'
//     },
//     {
//         tag: 'Tag 5',
//         game: 'Game 5',
//         score: 'Score 5',
//         rank: 'Rank 5',
//         region: 'Region 5',
//         characters: 'Characters 5',
//         startgg: 'StartGG 5'
//     },
//     {
//         tag: 'Tag 6',
//         game: 'Game 6',
//         score: 'Score 6',
//         rank: 'Rank 6',
//         region: 'Region 6',
//         characters: 'Characters 6',
//         startgg: 'StartGG 6'
//     },
//     {
//         tag: 'Tag 7',
//         game: 'Game 7',
//         score: 'Score 7',
//         rank: 'Rank 7',
//         region: 'Region 7',
//         characters: 'Characters 7',
//         startgg: 'StartGG 7'
//     },
//     {
//         tag: 'Tag 8',
//         game: 'Game 8',
//         score: 'Score 8',
//         rank: 'Rank 8',
//         region: 'Region 8',
//         characters: 'Characters 8',
//         startgg: 'StartGG 8'
//     },
//     {
//         tag: 'Tag 9',
//         game: 'Game 9',
//         score: 'Score 9',
//         rank: 'Rank 9',
//         region: 'Region 9',
//         characters: 'Characters 9',
//         startgg: 'StartGG 9'
//     },
//     {
//         tag: 'Tag 10',
//         game: 'Game 10',
//         score: 'Score 10',
//         rank: 'Rank 10',
//         region: 'Region 10',
//         characters: 'Characters 10',
//         startgg: 'StartGG 10'
//     },
//     {
//         tag: 'Tag 11',
//         game: 'Game 11',
//         score: 'Score 11',
//         rank: 'Rank 11',
//         region: 'Region 11',
//         characters: 'Characters 11',
//         startgg: 'StartGG 11'
//     },
//     {
//         tag: 'Tag 12',
//         game: 'Game 12',
//         score: 'Score 12',
//         rank: 'Rank 12',
//         region: 'Region 12',
//         characters: 'Characters 12',
//         startgg: 'StartGG 12'
//     },
//     {
//         tag: 'Tag 13',
//         game: 'Game 130',
//         score: 'Score 13',
//         rank: 'Rank 13',
//         region: 'Region 13',
//         characters: 'Characters 13',
//         startgg: 'StartGG 13'
//     },
// ];

const mock_data = [
    {
        tag: 'Ninja',
        game: 'Fortnite',
        score: '2500',
        rank: '1',
        region: 'NA',
        characters: 'Raven',
        startgg: 'Champion'
    },
    {
        tag: 'Shroud',
        game: 'PUBG',
        score: '2200',
        rank: '2',
        region: 'NA',
        characters: 'Sniper',
        startgg: 'Elite'
    },
    {
        tag: 'PewDiePie',
        game: 'Minecraft',
        score: '1800',
        rank: '3',
        region: 'EU',
        characters: 'Enderman',
        startgg: 'Veteran'
    },
    {
        tag: 'xQc',
        game: 'Overwatch',
        score: '2000',
        rank: '4',
        region: 'NA',
        characters: 'Winston',
        startgg: 'Master'
    },
    {
        tag: 'Summit1g',
        game: 'Sea of Thieves',
        score: '1900',
        rank: '5',
        region: 'NA',
        characters: 'Pirate',
        startgg: 'Admiral'
    },
    {
        tag: 'DrDisrespect',
        game: 'Call of Duty',
        score: '2100',
        rank: '6',
        region: 'NA',
        characters: 'Soldier',
        startgg: 'Warrior'
    },
    {
        tag: 'Pokimane',
        game: 'LoL',
        score: '1700',
        rank: '7',
        region: 'NA',
        characters: 'Ahri',
        startgg: 'Expert'
    },
    {
        tag: 'Myth',
        game: 'Valorant',
        score: '1600',
        rank: '8',
        region: 'NA',
        characters: 'Jett',
        startgg: 'Rookie'
    },
    {
        tag: 'Aceu',
        game: 'Apex Legends',
        score: '2300',
        rank: '9',
        region: 'NA',
        characters: 'Wraith',
        startgg: 'Legend'
    },
    {
        tag: 'TimTheTatman',
        game: 'Warzone',
        score: '1500',
        rank: '10',
        region: 'NA',
        characters: 'Operator',
        startgg: 'Competitor'
    },
    {
        tag: 'LIRIK',
        game: 'Tarkov',
        score: '1400',
        rank: '11',
        region: 'EU',
        characters: 'Raider',
        startgg: 'Scavenger'
    },
    {
        tag: 'Sykkuno',
        game: 'Among Us',
        score: '1300',
        rank: '12',
        region: 'NA',
        characters: 'Crewmate',
        startgg: 'Detective'
    }
];

const PlayerRecord = () => {
    

    const [next, setNext] = useState(1);
    const [objs, setObjs] = useState(mock_data);
    
    const handleNext = () => {
        setNext(next + 1);
    }

    const handlePrev = () => {
        setNext(next - 1);
    }

    const handleList = () => {
        return objs.slice((next - 1) * 10, next * 10);
    }

    // const sortRows = (heading) => {
    //     // sort the rows based on the clicked header (tag, game, score, rank, region, characters, startgg)
    //     if(heading === "Tag")
    //         setObjs(objs.sort((a,b) => a.tag - b.tag));
    //     else if(heading === "Game")
    //         setObjs(objs.sort((a,b) => a.game - b.game));
    //     else if(heading === "Score")
    //         setObjs(objs.sort((a,b) => a.score - b.score));
    //     else if(heading === "Rank")
    //         setObjs(objs.sort((a,b) => a.rank - b.rank));
    //     else if(heading === "Region")
    //         setObjs(objs.sort((a,b) => a.region - b.region));
    //     else if(heading === "Characters")
    //         setObjs(objs.sort((a,b) => a.characters - b.characters));
    //     else if(heading === "StartGG")
    //         setObjs(objs.sort((a,b) => a.startgg - b.startgg));

    //     console.log(heading);
    //     console.log(objs);

        
    //     // objs.sort((a,b) => a.last_nom - b.last_nom);
    // }

    // const sortRows = (heading) => {
    //     const sortedObjs = [...objs]; // Clone the array
    //     sortedObjs.sort((a, b) => {
    //         // if (heading === "Score" || heading === "Rank" || heading === "StartGG") {
    //         //     // Assuming these are numeric values
    //         //     return a[heading.toLowerCase()] - b[heading.toLowerCase()];
    //         // } else {
    //         //     // For string values, use localeCompare
    //         //     return ("" + a[heading.toLowerCase()]).localeCompare(b[heading.toLowerCase()]);
    //         // }
    //         return ("" + a[heading.toLowerCase()]).localeCompare(b[heading.toLowerCase()]);
    //     });
    //     setObjs(sortedObjs); // Set the state with the newly sorted array
    //     console.log(heading);
    //     console.log(sortedObjs);
    // };

    const sortRows = (heading) => {
        const sortedObjs = [...objs]; // Clone the array
        sortedObjs.sort((a, b) => {
            const valueA = a[heading.toLowerCase()];
            const valueB = b[heading.toLowerCase()];
            
            // Extract numbers from the strings
            const numA = parseFloat(valueA.replace(/[^\d.]/g, ''));
            const numB = parseFloat(valueB.replace(/[^\d.]/g, ''));
            
            // Check if both values are numbers
            if (!isNaN(numA) && !isNaN(numB)) {
                return numA - numB;
            } else {
                // Fallback to string comparison
                return valueA.localeCompare(valueB);
            }
        });
        setObjs(sortedObjs); // Set the state with the newly sorted array
    };

    useEffect(() => {
        handleList();
    }, [next, objs]);

    const numberOfPages = Math.ceil(objs.length / 10);

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-center' style={{width: '80%'}}>
                    <div className='border-start border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left', cursor: 'pointer'}} onClick={() => sortRows("Tag")}>
                        <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Tag</h4>
                    </div>
                    <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left', cursor: 'pointer'}} onClick={() => sortRows("Game")}>
                        <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Game</h4>
                    </div>
                    <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left', cursor: 'pointer'}} onClick={() => sortRows("Score")}>
                        <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Score</h4>
                    </div>
                    <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left', cursor: 'pointer'}} onClick={() => sortRows("Rank")}>
                        <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Rank</h4>
                    </div>
                    <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left', cursor: 'pointer'}} onClick={() => sortRows("Region")}>
                        <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Region</h4>
                    </div>
                    <div className='border-top border-bottom border-end border-dark' style={{width: '33%', textAlign: 'left', cursor: 'pointer'}} onClick={() => sortRows("Characters")}>
                        <h4 className='text-left bg-secondary text-black ps-3 pt-2 pb-2'>Characters</h4>
                    </div>
                    <div className='border-end border-top border-bottom border-dark' style={{width: '33%', textAlign: 'left', cursor: 'pointer'}} onClick={() => sortRows("StartGG")}>
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
                <button type='button' className='btn bg-info text-white rounded-0 me-4' style={{width: '80px'}} onClick={handlePrev} disabled={next === 1}>&#8592;</button>
                <p className='mt-2'>{next} of {numberOfPages}</p>
                <button type='button' className='btn bg-info text-white rounded-0 ms-4' style={{width: '80px'}} onClick={handleNext} disabled={next === numberOfPages}>&#8594;</button>
            </div>
        </div>
    )
}

export default PlayerRecord