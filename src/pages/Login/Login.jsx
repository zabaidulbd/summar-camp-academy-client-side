
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    };



    return (
        <>

            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <h2 className='text-3xl text-bold p-3 text-center'>Please Sign In</h2>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password",

                            )} placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p><small>Do not have an account ? <Link to="/signup"><span className='font-bold'>Sign Up</span></Link></small></p>
                            </label>
                        </div>
                        <span className="text-center"><SocialLogin></SocialLogin></span>
                        <div className="form-control">
                            <input className="btn btn-error" type="submit" value="Sign In" />
                        </div>
                    </form>

                </div>

            </div>
        </>
    );
};

export default Login;