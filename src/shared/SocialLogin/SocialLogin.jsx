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

                const userInformation = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('https://assignment-twelve-server-side-six.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInformation)

                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error px-5 w-full"><FaGoogle></FaGoogle>Google</button>
        </div>
    );
};

export default SocialLogin;