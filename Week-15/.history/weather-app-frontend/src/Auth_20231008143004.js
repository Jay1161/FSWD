// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

function Auth() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/protected" component={ProtectedComponent} />
          <Redirect to="/register" />
        </Switch>
      </div>
    </Router>
  );
}

function ProtectedComponent() {
  return <h2>Protected Component - Only accessible when logged in.</h2>;
}

export default Auth;
