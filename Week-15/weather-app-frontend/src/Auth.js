// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './Register';
import Login from './Login';


function Auth() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Redirect to="/register" />
        </Switch>
      </div>
    </Router>
  );
}

export default Auth;
