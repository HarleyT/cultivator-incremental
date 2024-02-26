import { Box, IconButton, useTheme } from "@mui/material";
import { ColourModeContext, tokens } from "../theme";
import { useContext } from "react";


import Title from "../components/Title"


const Settings = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    const colourmode = useContext(ColourModeContext);

    return (
        <>
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Settings"/>
                </Box>
            </Box>
            <div className="container tab" id="settings">
                <div className="box1">
                    <button className="save"> Import Save</button>
                    <button className="save"> Export Save</button>
                </div>
                <div className="box2">
                    <div className="Stats">
                        <p>You started playing the game on ##/##/20##.</p>
                        <p>You have played for ##:## real time.</p>
                        <p>Your existence has spanned #.##k days game time.</p>
                    </div>
                    <button className="reset"> Hard Reset Game</button>
                </div>
                <div className="box3">
                    <div className="log">Change Log</div>
                </div>                        
            </div>
        </>
    );
};

export default Settings;
