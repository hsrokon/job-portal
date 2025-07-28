import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }

    if(user) return children;

    return <Navigate state={location.pathname} to={'/auth/login'} />
};

export default PrivateRoute;