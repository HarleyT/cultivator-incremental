import React from 'react';


export function DayNightTimer({time, loop}) {
  return (
    <>
        <div className="timer">
            <span>{time}</span>
        </div>
        <div className="loop">
            <span>{loop} Days</span>
        </div>
    </>
  )
}

export default DayNightTimer