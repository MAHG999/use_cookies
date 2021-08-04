
import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/react-login/" component={Login}/>
      <Route exact path="/react-login/dashboard/" component={Dashboard}/>
    </Switch>
  </BrowserRouter>
);

export default App;