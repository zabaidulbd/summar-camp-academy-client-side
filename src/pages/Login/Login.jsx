import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/lottie/animation_lk7qq4dr.json";

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
            });
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <>
            <div className="hero min-h-min py-10 bg-base-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-evenly items-center">
                        {/* Lottie Animation */}
                        <div className="w-full sm:w-1/2 p-4">
                            <Lottie animationData={groovyWalkAnimation} loop={true} />
                        </div>

                        {/* Login Form */}
                        <div data-aos="fade-down" className="w-full rounded sm:w-1/2 flex-shrink-0 max-w-xl shadow-2xl bg-base-100 mt-8 sm:mt-0">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <h2 className="text-3xl font-bold p-3 text-center">Please Sign In</h2>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', { required: true })}
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register('password')}
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <label className="label">
                                        <p>
                                            <small>
                                                Do not have an account? <Link to="/signup"><span className="font-bold">Sign Up</span></Link>
                                            </small>
                                        </p>
                                    </label>
                                </div>
                                <span className="text-center">
                                    <SocialLogin />
                                </span>
                                <div className="form-control">
                                    <input className="btn btn-error hover:bg-red-500 w-full sm:w-auto" type="submit" value="Sign In" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
