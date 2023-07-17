import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaUsers, FaBookOpen, FaHome, FaBook, FaMoneyCheckAlt } from "react-icons/fa";


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer drawer-mobile lg:drawer-open bg-red-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {
                    isAdmin ?
                        <>
                            <h1 className="font-bold text-5xl mb-10 mt-5">Admin Dash board</h1>
                        </> :
                        isInstructor ?
                            <>
                                <h1 className="font-bold text-5xl mb-10 mt-5">Instructor Dashboard</h1>
                            </> :

                            <>
                                <h1 className="font-bold text-5xl mb-10 mt-5">Student Dash board</h1>
                            </>

                }
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    {
                        isAdmin ?
                            <>
                                <li className="font-bold text-xl mt-5"><Link to='manageclasses'> <FaBookOpen></FaBookOpen> Manage Classes</Link> </li>
                                <li className="font-bold text-xl mt-5"><Link to='manageusers'><FaUsers></FaUsers> Manage Users</Link> </li>
                            </> :
                            isInstructor ?
                                <>
                                    <li className="font-bold text-xl mt-5"><Link to='addclass'><FaBookOpen></FaBookOpen> Add a class</Link> </li>
                                    <li className="font-bold text-xl mt-5"><Link to='myclasses'><FaBook></FaBook> My Classes</Link> </li>
                                </> :

                                <>
                                    <li className="font-bold text-xl mt-5"><Link to='selectedclass'><FaBookOpen></FaBookOpen> My Selected class</Link> </li>
                                    <li className="font-bold text-xl mt-5"><Link to='enrolledclass'><FaBook></FaBook> My Enrolled class</Link> </li>
                                    <li className="font-bold text-xl mt-5"><Link to='paymenthistory'><FaMoneyCheckAlt></FaMoneyCheckAlt> Payment History</Link> </li>
                                </>

                    }
                    <div className="divider"></div>
                    <li className="font-bold text-xl mt-5"><Link to='/'><FaHome></FaHome> Home</Link> </li>
                </ul>


            </div>
        </div>
    );
};

export default Dashboard;