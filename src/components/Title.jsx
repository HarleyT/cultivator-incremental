import { Typography , Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Title = ({ title }) => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
        <Box mb="10px">
            <Typography
                variant="h2"
                colour={colours.black[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default Title;