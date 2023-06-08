import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

    // const isAdmin = true;

    const [isAdmin] = useAdmin();



    const [isInstructor] = useInstructor();



    return (
        <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {
                    isAdmin ?
                        <>
                            <h1 className="font-bold text-5xl">Admin Dash board</h1>
                        </> :
                        isInstructor ?
                            <>
                                <h1 className="font-bold text-5xl">Instructor Dashboard</h1>
                            </> :

                            <>
                                <h1 className="font-bold text-5xl">Student Dash board</h1>
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
                                <li><Link>Manage Classes</Link> </li>
                                <li><Link to='manageusers'>Manage Users</Link> </li>
                            </> :
                            isInstructor ?
                                <>
                                    <li><Link>Add a class</Link> </li>
                                    <li><Link>My Classes</Link> </li>
                                </> :

                                <>
                                    <li><Link>My Selected class</Link> </li>
                                    <li><Link>My Enrolled class</Link> </li>
                                </>

                    }
                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link> </li>
                </ul>


            </div>
        </div>
    );
};

export default Dashboard;