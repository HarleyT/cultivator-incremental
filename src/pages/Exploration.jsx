
import { Box, useTheme, FormControl, NativeSelect, InputLabel } from "@mui/material";
import { tokens } from "../theme";

import Title from "../components/Title"
import Universe from "../components/Universe";


const Exploration = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
        <>
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Exploration"/>
                </Box>
            </Box>
            <div className="container tab" id="exploration">
                <div className="box1">
                </div>
                <div className="box2">
                    <div className="universe"><Universe/></div>
                    <span></span>
                </div>
                <div className="box3">
                </div>
            </div>
        </>
    )
}

export default Exploration;
