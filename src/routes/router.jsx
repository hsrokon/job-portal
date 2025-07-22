import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';

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
        path: '/auth/logIn',
        element: <Login />
    },
    {
        path: '/auth/signUp',
        element: <SignUp />
    }
])

export default router;