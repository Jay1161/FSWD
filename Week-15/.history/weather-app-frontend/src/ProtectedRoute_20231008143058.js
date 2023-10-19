// ProtectedRoute.js

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
