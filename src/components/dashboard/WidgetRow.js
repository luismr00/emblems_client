// import React, { useState } from 'react'

// const WidgetRow = ({data}) => {

// //   let index = 0;
//   const [currentInfo, setCurrentInfo] = useState(data[0]);

//   const dataRotator = () => {
//     const index = data.indexOf(currentInfo);

//     if ((data.length - 1) === index){
//         setCurrentInfo(data[0])
//     } else {
//         setCurrentInfo(data[index + 1]);
//     }

//     console.log("testing execution!");
// }

//   setInterval(dataRotator, 8000);

//   return (
//     <div className='d-flex justify-content-between'>
//         <p>{currentInfo[0]}</p>
//         <p className='text-primary'>{currentInfo[1]}</p>
//     </div>
//   )
// }

// export default WidgetRow

import React, { useState, useEffect } from 'react';
import '../../css/animations.css'; // Import the CSS file containing animations

const WidgetRow = ({ data, isEditMode }) => {
    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
  
    // All timer functions must go under useEffect if ever used or it will create bugs
    useEffect(() => {
      if (!isEditMode) {
        // You can remove this condition below later if all data will be greater leangth than 1
        if (data.length > 1) {
        const intervalId = setInterval(() => {
          setIsFadingOut(true); // Start fading out
  
          // Set the next index and stop fading out after fade out animation duration
          setTimeout(() => {
            setCurrentInfoIndex((prevIndex) =>
              prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
            setIsFadingOut(false); // Stop fading out
          }, 500); // Wait for fade out animation duration
        }, 5000);
  
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
        }
      }
    }, [isEditMode]);
  
    const currentInfo = data[currentInfoIndex];
  
    return (
      <div className={`d-flex justify-content-between ${data.length > 1 && !isEditMode && (isFadingOut ? 'fade-out' : 'fade-in')}`}>
        <p>{currentInfo[0]}</p>
        <p className='text-primary'>{currentInfo[1]}</p>
      </div>
    );
  };
  
  export default WidgetRow;