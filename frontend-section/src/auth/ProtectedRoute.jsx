import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isLoggedIn, ...rest }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <Route {...rest} render={() => <Component />} />
  );
};

export default ProtectedRoute;