import React from "react";
// import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="logo">
						<a href="https://github.com/HarleyT/cultivator-incremental">
							<img src="" alt="Cultivator Incremental" />
						</a>
					</div>
					<div className="navbar">Main</div>
					<div className="navbar">Settings</div>
				</div>
			</header>
		);
	}
}

export default Header;