import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout";
import CreateUser from '../crudfiles/CreateUser'
import EditUser from '../crudfiles/EditUser'
import Users from '../crudfiles/Users'
import NotFound from '../crudfiles/NotFound'
import Allusers from "../crudfiles/Allusers";
import RegisteredUsers from "../crudfiles/RegisteredUsers";
import Login from "../authentication/Login"
import Register from '../authentication/Register'
import PrivateRoute from "../authentication/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/createuser",
                element: <PrivateRoute><CreateUser /></PrivateRoute>
            },
            {
                path: "/edituser/:id",
                element: <PrivateRoute><EditUser /></PrivateRoute>
            },
            {
                path: "/showusers",
                element: <PrivateRoute><Users /></PrivateRoute>
            },
            {
                path: "/allusers",
                element: <PrivateRoute><Allusers /></PrivateRoute>
            },
            {
                path: "/registeredusers",
                element: <PrivateRoute><RegisteredUsers /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

