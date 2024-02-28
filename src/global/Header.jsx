import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { login, logout } from '../state/user';

import { useContext } from "react";
// import { Menu, MenuItem } from "react-pro-sidebar";
import { Typography, Box, useTheme, IconButton } from "@mui/material";
import { ColourModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightmodeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const Header = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	const colourmode = useContext(ColourModeContext);

	const dispatch = useDispatch();

	return (
		<Box display="flex">
			<Box>
				<div className="logo">
					<a href="https://github.com/HarleyT/cultivator-incremental">
						<img src="/assets/golden.png" alt="Cultivator Incremental" />
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
				<button onClick={() => {
					dispatch(login({name: "Ryathimus"}));
					}}> Login
				</button>
				<button onClick={() => {
					dispatch(logout());
					}}> Logout
				</button>
			</Box>
		</Box>
	);
};

export default Header;