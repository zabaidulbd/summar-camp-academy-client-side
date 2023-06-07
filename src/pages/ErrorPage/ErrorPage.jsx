import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>

            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684407434~exp=1684408034~hmac=a53215c3264d07b09a52b0a52f5b67f0a6061a299ef88ba7fc25aaa4c47ff3f7" alt="" />
            <Link to={'/'}><button className="btn btn-warning ms-60 mb-10">Go Back to Home</button></Link>

        </div>
    );
};

export default ErrorPage;