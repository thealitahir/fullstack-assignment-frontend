import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Pdp from "./Component/ProductDetailPage";
import Login from "./Component/Auth/Login";
import SignUp from "./Component/Auth/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pdp" component={Pdp} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
