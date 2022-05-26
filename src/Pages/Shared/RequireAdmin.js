import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Firebase/firebase.init';
import LoadingSpinner from './LoadingSpinner';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()
    if (loading || adminLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user || !admin) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;