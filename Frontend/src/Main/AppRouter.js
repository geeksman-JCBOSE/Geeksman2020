import React from "react";
import MainLayout from "./components/mainlayout/mainlayout";
import Members from "./components/members/members";
import Events from "./components/events/events";
import UserPanel from "./components/userpanel/userpanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <div className="AppRouter">
          <Route path="/" exact component={MainLayout} />
          <Route path="/members" exact component={Members} />
          <Route path="/events" exact component={Events} />
          <Route path="/userpanel" exact component={UserPanel} />
        </div>
      </Switch>
    </Router>
  );
}

export default AppRouter;
