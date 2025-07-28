import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import JobDetails from '../pages/JobDetails';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <Home />
            }
        ]
    },
    {
        path: '/job/:id',
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
    },
    {
        path: '/auth/logIn',
        element: <Login />
    },
    {
        path: '/auth/signUp',
        element: <SignUp />
    }
])

export default router;