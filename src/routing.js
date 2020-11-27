import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login';

function Routing (){
    return(
      <Router>
          <Switch>
          <Route path="/login" component={Login} />
          </Switch>
      </Router>
    )
}
export default Routing ;