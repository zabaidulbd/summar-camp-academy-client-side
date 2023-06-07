import { Link } from "react-router-dom";
import errorPic from '../../assets/error/error.png';


const ErrorPage = () => {
    return (
        <div>

            <img src={errorPic} alt="error" />
            <Link to={'/'}><button className="btn btn-error ms-96 mb-10">Go to Home page</button></Link>

        </div>
    );
};

export default ErrorPage;