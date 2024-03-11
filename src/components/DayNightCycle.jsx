import { useState, useEffect, useReducer } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import AppState from "../App";

// import { PlanetContext } from "../state/planetState";
// import { signal } from "@preact/signals";
import { useContext } from "preact/hooks";

const ACTIONS = {
  EARTH: 'Earth',
  MARS: 'Mars'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.EARTH:
      return {planet: state.planet = 24}
    case ACTIONS.MARS:
      return {planet: state.planet = 12}
    default:
      return state
  }
}

export default function DayNightCycle() {
  const {realm} = useContext(AppState);

  const [state, dispatch] = useReducer(reducer, {planet: 24})

  const [time, setTime] = useState(state.planet);
  const [running, setRunning] = useState(false);
  const [loop, setLoop] = useState(0);

  function earth() {
    dispatch({ type: ACTIONS.EARTH })
  }

  function mars() {
    dispatch({ type: ACTIONS.MARS })
  }

  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (time === 0) {
        setTime(state.planet);
        setLoop(loop + 1);
        } else {
          setTime(time - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, loop, running, state]);

  function playButton(){
    if(time !== 0) {
      setRunning(true);
    }
  }

  function pauseButton() {
    setRunning(false);
  }
  
  // const changeTime = (e) => {
  //   setTime(e.target.value);
  // }


  return (
    <>
    <div className="daynightcycle">
      <div className="timer">
        <span>{time}</span>
      </div>
      <div className="loop">
        <span>{loop} Days</span>
      </div>
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
      <button onClick={earth}>earth</button>
      <button onClick={mars}>mars</button>
      <span>{state.planet}</span>
      <span>{realm}</span>
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