import React from "react";
import Dropdown from "react-dropdown";
import { Typography , Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Button } from '@mui/base/Button';

import Title from "../components/Title"
// import Planet from "../components/Time";

const planets = [
    'Earth', 'Mars', 'Venus', 'Planet X'
];
const planetLabel = planets[0];

const timers = [
    '10sec', '20sec', '30sec', '40sec'
];
const planetTime = timers[0];

const realms = [
    'Mortal', 'Qi Sensing', 'Qi Movement', 'Qi Rotation'
];
const realmLabel = realms[0];

const ages = [
    '10', '20', '30', '40'
];
const ageLabel = ages[0];

const locations = [
    'Orphanage', 'Academy', 'Arena', 'Dungeon'
];
const locationLabel = locations[0];


const Hero = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
        <>
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Main"/>
                </Box>
            </Box>
            <div className="container tab" id="main">
                <div className="box1">
                    <div style={{ color: "red" }}>
                        Lifespan: <span id="lifespanDisplay">70</span> years
                        <br />
                        Real Time: <span id="realtimeDisplay">00:00:00</span>
                        <button
                            id="pauseButton"
                            className="button"
                            // onClick="togglePause()"
                        >
                            Pause
                        </button>
                    </div>
                    <img
                        src="./img/Nightcycle.gif"
                        alt="Day/Night Cycle"
                        className="anim-cycle"
                    />
                    <div className="location">
                        <span>Location:</span>
                        <span>{locationLabel}</span>
                    </div>
                </div>
                <div className="box2">
                    <div className="planet-selection">
                        {/* <Dropdown options={planetLabel} onChange={this._onSelect} value={"Earth"} placeholder="Choose Planet" /> */}
                        <p>{planetTime}</p>
                    </div>
                    <div className="animation-box">
                    </div>
                    <div className="action-menu" id="action-menu">
                        <button className="action" id="energy">
                        Tr. Energy
                        </button>
                        <button className="action" id="physical">
                        Tr. Pysical
                        </button>
                        <button className="action" id="meditate">
                        Meditate
                        </button>
                        <button className="action" id="exploration">
                        Exploration
                        </button>
                        <button className="action" id="rest">
                        Rest
                        </button>
                    </div>
                    <div className="task-container">
                        <button className="task Task1">
                        01:00
                        </button>
                        <button className="task Task2">
                        02:00
                        </button>
                        <button className="task Task3">
                        03:00
                        </button>
                        <button className="task Task4">
                        04:00
                        </button>
                        <button className="task Task5">
                        05:00
                        </button>
                        <button className="task Task6">
                        06:00
                        </button>
                        <button className="task Task7">
                        07:00
                        </button>
                        <button className="task Task8">
                        08:00
                        </button>
                        <button className="task Task9">
                        09:00
                        </button>
                        <button className="task Task10">
                        10:00
                        </button>
                        <button className="task Task11">
                        11:00
                        </button>
                        <button className="task Task12">
                        12:00
                        </button>
                        <button className="task Task13">
                        13:00
                        </button>
                        <button className="task Task14">
                        14:00
                        </button>
                        <button className="task Task15">
                        15:00
                        </button>
                        <button className="task Task16">
                        16:00
                        </button>
                        <button className="task Task17">
                        17:00
                        </button>
                        <button className="task Task18">
                        18:00
                        </button>
                        <button className="task Task19">
                        19:00
                        </button>
                        <button className="task Task20">
                        20:00
                        </button>
                        <button className="task Task21">
                        21:00
                        </button>
                        <button className="task Task22">
                        22:00
                        </button>
                        <button className="task Task23">
                        23:00
                        </button>
                        <button className="task Task24">
                        24:00
                        </button>
                    </div>
                </div>
                <div className="box3">
                    <div className="realm">
                        <span>Realm:</span>
                        <span>{realmLabel}</span>
                        <span>Age:</span>
                        <span>{ageLabel}</span>
                    </div>
                    <img
                        src="./img/CharacterSpritePH.png"
                        alt="Character Sprite"
                        className="anim-char"
                    />
                    <div className="state">
                        <span>Physical State</span>
                        <span>Mental State</span>
                        <span>Spiritual State</span>
                    </div>
                </div>                        
            </div>
        </>
    )
}

export default Hero;
