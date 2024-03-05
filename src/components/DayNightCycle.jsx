import React, { useState, useEffect } from "react";
import DayNightTimer from "./DayNightTimer";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export default function DayNightCycle() {
  const [time, setTime] = useState(15);
  const [running, setRunning] = useState(true);
  const [loop, setLoop] = useState(0);

  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (time === 0) {
        setTime(15);
        setLoop(loop + 1);
        } else {
          setTime(time - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, loop, running]);

  function playButton(){
    if(time !== 0) {
      setRunning(true);
    }
  }

  function pauseButton() {
    setRunning(false);
  }
  
  const changeTime = (e) => {
    setTime(e.target.value);
  }


  return (
    <>
    <div className="daynightcycle">
      <DayNightTimer time={time} loop={loop} running={running} changeTime={changeTime} pauseButton={pauseButton} playButton={playButton}/>
      {!running && (
      <button className="play" onClick={playButton}>
      <BsFillPlayFill />
      </button>
      )}
      {running && (
      <button className="pause" onClick={pauseButton}>
      <BsPauseFill />
      </button>
      )}
    </div>
    </>
  );
  
}


// useEffect(() => {
//   let interval = setInterval(() => {
//     clearInterval(interval);
//     if (time === 0) {
//       setTime(15);
//       setLoop(loop + 1);
//     } else {
//       setTime(time - 1);
//     }
//   }, 1000);
// }, [time, loop]);

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';

// export default function LinearDeterminate() {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 100) {
//           return 0;
//         }
//         const diff = Math.random() * 10;
//         return Math.min(oldProgress + diff, 100);
//       });
//     }, 500);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
  
//   return (
//     <Box sx={{ width: '100%' }}>
//       <LinearProgress variant="determinate" value={progress} />
//     </Box>
//   );
// }