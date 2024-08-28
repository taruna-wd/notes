import React, { useContext } from 'react';
import { Navigate , useNavigate } from 'react-router-dom';
import { AuthContext } from './Authcontext';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
      const Navigate = useNavigate()
    if (!user) {
        return  navigator('/login');
    }

    return children;
};

export default ProtectedRoute;
