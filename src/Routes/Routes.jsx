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
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
                path: 'myclasses',
                element: <MyClasses></MyClasses>

            },
            {
                path: 'selectedclass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'selectedclass/pay/:id',
                element: <Payment></Payment>
            },

            {
                path: 'enrolledclass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]


    }
]);
export default router;