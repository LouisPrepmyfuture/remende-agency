import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
	const user = useSelector((state) => state.user.profil);
    if (!user) {
			return <Navigate to="/login"/>
    }
    return children;
}

export default ProtectedRoute ;