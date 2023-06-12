import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";



const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light')
        }
    }

    return (
        <div className="navbar bg-pink-400">
            <div className="flex-1">
                <div>
                    <img className="w-32 rounded-full mx-5" src="https://img.freepik.com/free-vector/gradient-alligator-logo-design_23-2149921534.jpg?w=740&t=st=1686131201~exp=1686131801~hmac=3550dbdfa34090a0ec741fac4802ca1ddf43c1d8b0ffa0cb6797b3672f478e1c" alt="Logo" />
                </div>
                <div className="px-2">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
                <div>

                    <p className="text-xl font-bold text-white">
                        <ActiveLink to={'/'}>Home</ActiveLink>
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold text-white mx-5"><ActiveLink to={'/instructors'}>Instructors</ActiveLink></p>
                </div>
                <div>
                    <span className="text-xl font-bold text-white"><ActiveLink to={'/allclasses'}>Classes</ActiveLink></span> </div>
                <div><h1 className="text-5xl font-bold text-gray-800 ms-10">Sports Academy</h1></div>
            </div>

            <div className="flex-none gap-2">
                {
                    user ?
                        <>
                            <span className="text-xl font-bold text-blue-50 mx-4"><ActiveLink to={'/dashboard'}>Dashboard</ActiveLink></span>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full mx-2">
                                    <img src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-red-folder_1298-179.jpg?w=740&t=st=1683177286~exp=1683177886~hmac=c440209e285a379ced974449f84436bdcc297217e39170b08f534dfe769c131d" title="Zabaidul Islam" />
                                </div>
                            </label>

                            <button onClick={handleLogOut} className="btn btn-error me-10"><span className="text-white">Log-Out</span></button>
                        </> :
                        <Link to={'/login'}><button className="btn btn-error me-10"><span className="text-white">Login</span></button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;