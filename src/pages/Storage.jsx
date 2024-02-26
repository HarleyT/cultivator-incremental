
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

import Title from "../components/Title"


const Storage = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Storage"/>
                </Box>
            </Box>
    )
}

export default Storage;
