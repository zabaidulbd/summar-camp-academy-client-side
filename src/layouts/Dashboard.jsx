import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    const isInstructor = false;



    return (
        <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
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