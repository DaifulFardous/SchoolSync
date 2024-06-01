import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, redirectTo, ...rest }) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to={redirectTo} /> : <Component {...rest} />;
};

export default ProtectedRoute;
