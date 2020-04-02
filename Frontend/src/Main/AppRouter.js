import React from "react";
import MainLayout from "./mainlayout/MainLayout";
import Members from "./members/Members";
import Events from "./events/Events";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
   return ( 
    <Router>
      <Switch>
        <div className="AppRouter">
          <Route path="/" exact exact component={MainLayout} />
          <Route path="/members" exact exact component={Members} />
          <Route path="/events" exact exact component={Events} />
        </div>
      </Switch>
    </Router>
);
}

export default AppRouter;
