import React, { useState, useEffect } from "react";

export default function DayNightCycle() {
  const [time, setTime] = useState(15);
  const [running, setRunning] = useState(true);
  const [loop, setLoop] = useState(0);
  
  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (time === 0) {
        setTime(15);
        setLoop(loop + 1);
      } else {
        setTime(time - 1);
      }
    }, 1000);
  }, [time, loop]);


  const handlePause = () => {
    if(running === true){
      setRunning(false);
      console.log("pause")
    } else {
      setRunning(true);
      console.log("play")
    }

  }

  return (
    <div className="daynightcycle">
      <div className="timer">
        {time}
      </div>
      <div className="loop">
        {loop} Days
      </div>
      <button onClick={handlePause}>
        Pause
      </button>
    </div>
  )
  
}


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