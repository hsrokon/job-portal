import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import JobDetails from '../pages/JobDetails';
import PrivateRoute from './PrivateRoute';
import Apply from '../pages/Apply';
import MyApplications from '../pages/MyApplications';
import PostAJob from '../pages/PostAJob';
import MyPostedJobs from '../pages/MyPostedJobs';
import ViewApplications from '../pages/ViewApplications';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/apply/job/:id',
                element: <PrivateRoute><Apply /></PrivateRoute>,
                // loader: ({params}) => fetch(`http://localhost:5000/jobs/apply/${params.id}`)
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: '/postAJob',
                element: <PostAJob />
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: '/viewApplications/:jobId',
                element: <PrivateRoute><ViewApplications /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/apply/myJobApplied/${params.jobId}`)
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