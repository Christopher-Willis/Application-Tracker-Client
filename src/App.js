import React from 'react';
import NabBar from './components/NavComponent'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/LandingComponent'
import Account from './components/AccountComponent'
import Register from './components/RegisterComponent'
import Login from './components/LoginComponent'
import Reset from './components/ResetComponent'
import ResetPassword from './components/AccountResetPasswordComponent'

function App() {
  return (
    <Router>
      <NabBar/>
      <Route path="/" exact component={Landing} />
      <Route path="/account/" exact component={Account} />
      <Route path="/account/register/" exact component={Register} />
      <Route path="/account/login/" exact component={Login} />
      <Route path="/account/reset/" exact component={Reset} />
      <Route path="/account/reset_password/:token" exact component={ResetPassword} />
    </Router>
  );
}

export default App;
