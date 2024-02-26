
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

import Title from "../components/Title"


const TrainingPhysical = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Training - Physical"/>
                </Box>
            </Box>
    )
}

export default TrainingPhysical;
