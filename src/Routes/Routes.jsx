import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Instructors from "../pages/Instructors/Instructors";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import AllClasses from "../pages/AllClasses/AllClasses";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>

            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            },
            {
                path: 'selectedclass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'selectedclass/pay',
                element: <Payment></Payment>
            }
        ]


    }
]);
export default router;