import { Link } from "react-router-dom";

import { useContext } from "react";
// import { Menu, MenuItem } from "react-pro-sidebar";
import { Typography, Box, useTheme, IconButton } from "@mui/material";
import { ColourModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightmodeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// import { NavLink } from "react-router-dom";

// const Item = ({ title, to, selected, setSelected}) => {
// 	const theme = useTheme();
// 	const colours = tokens(theme.palette.mode);
// 	const colourmode = useContext(ColourModeContext);

// 	return (
// 		<MenuItem
// 		active={selected === title}
// 		style={{ colour: colours.black[100]}}
// 		onClick={() => setSelected(title)}
// 		>
// 			<Typography>{title}</Typography>
// 			<Link to={to}/>
// 		</MenuItem>
// 	);
// };

const Header = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	const colourmode = useContext(ColourModeContext);
	// const [selected, setSelected] = useState("Hero");

	return (
		<Box display="flex">
			<Box>
				<div className="logo">
					<a href="https://github.com/HarleyT/cultivator-incremental">
						<img src="" alt="Cultivator Incremental" />
					</a>
				</div>
			</Box>
			<Box display="flex" justifyContent="space-between">
				<Typography
				variant="h5"
				colour={colours.black[100]}
				>
				<Link className="navbar" to="/Hero">Hero</Link>
				<Link className="navbar" to="/Combat">Combat</Link>
				<Link className="navbar" to="/Character">Character</Link>
				<Link className="navbar" to="/Storage">Storage</Link>
				<Link className="navbar" to="/Dao">Dao</Link>
				<Link className="navbar" to="/Exploration">Exploration</Link>
				<Link className="navbar" to="/TrainingSkills">TrainingSkills</Link>
				<Link className="navbar" to="/TrainingPhysical">TrainingPhysical</Link>
				<Link className="navbar" to="/TrainingEnergy">TrainingEnergy</Link>
				<Link className="navbar" to="/Settings">Settings</Link>
				</Typography>
			</Box>
			<Box display="flex">
				<IconButton onClick={colourmode.toggleColourMode}>
					{theme.palette.mode === 'dark' ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlinedIcon></NotificationsOutlinedIcon>
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon></SettingsOutlinedIcon>
				</IconButton>
			</Box>
		</Box>
	);
};

export default Header;