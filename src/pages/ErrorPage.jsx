import { Link } from "react-router-dom";
import Image from "../assets/NPH.jpg";

const ErrorPage = () => {

    return (
            <div className="error">
            <img
            src={Image}
            alt="404 Error" />
            <Link to="/">Home</Link>
            </div>
    );
}

export default ErrorPage;
