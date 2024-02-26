import React from "react";
// import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<p>
					{/* <Link to="/" exact="true">
						Home
					</Link>{" "}
					| <Link to="/Home">About</Link> |{" "}
					<Link to="/Settings">Contact</Link> */}
				</p>
				<p className="text-center">Designed by Harley T</p>
			</footer>
		);
	}
}

export default Footer;