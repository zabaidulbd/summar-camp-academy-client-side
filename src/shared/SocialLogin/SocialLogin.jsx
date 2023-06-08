import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';




const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });

            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error"><FaGoogle></FaGoogle>Google</button>
        </div>
    );
};

export default SocialLogin;