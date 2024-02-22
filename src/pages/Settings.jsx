import React from "react";

class Settings extends React.Component{
    render(){
        return (
            <>
                <div className="container tab hidden" id="settings">
                    <div className="box1">
                        <div
                        className=""
                        id="statsTabTabButton"
                        // onClick={setTabSettings('statsTab')}
                        >
                        Stats
                        </div>
                        <ul>
                            <li>
                            You started playing the game on <span id="startDateDisplay" />,{" "}
                            <span id="playedDaysDisplay" /> days ago.
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Settings;