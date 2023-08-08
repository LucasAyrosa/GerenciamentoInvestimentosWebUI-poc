import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{
  path: string;
  element: React.ReactNode;
}> = ({ path, element }) => {
    var token = localStorage.getItem('gipucmgpoc');
  const isAuthenticated = !!token;

  return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
