import React, { useState, useEffect } from 'react';

export function TaskButton() {
        const [filled, setFilled] = useState(0);
        const [isRunning, setIsRunning] = useState(false);

        useEffect(() => {
            if (filled < 100 && isRunning) {
                setTimeout(() => setFilled(prev => prev += 2), 50)
            }
        },[filled, isRunning])

    return (
      <div>
        <div className="taskbar">
            <div style={{
                height: "100%",
                width: '${filled}%',
                backgroundColor: "black",
                transition: "width 0.5s"
            }}></div>
            <span className='taskPercent'> { filled }%</span>
        </div>
        {/* <button className='btn' onClick={() => setIsRunning(true)}>Run</button> */}
      </div>
    )
  }

export default TaskButton