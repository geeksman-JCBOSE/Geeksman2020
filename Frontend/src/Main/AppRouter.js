import React from "react";
import MainLayout from "./mainlayout/MainLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
   return ( 
    <Router>
      <Switch>
        <div className="AppRouter">
          <Route path="/" exact exact component={MainLayout} />
        </div>
      </Switch>
    </Router>
);
}

export default AppRouter;
