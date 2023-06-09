import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-pink-400">
            <div className="flex-1">
                <div>
                    <img className="w-32 rounded-full mx-5" src="https://img.freepik.com/free-vector/gradient-alligator-logo-design_23-2149921534.jpg?w=740&t=st=1686131201~exp=1686131801~hmac=3550dbdfa34090a0ec741fac4802ca1ddf43c1d8b0ffa0cb6797b3672f478e1c" alt="Logo" />
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
                <div><h1 className="text-7xl font-bold text-slate-900 ms-10">Sports Academy</h1></div>
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