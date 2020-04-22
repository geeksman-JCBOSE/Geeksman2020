import React from "react";
import MainLayout from "./components/mainlayout/mainlayout";
import Members from "./components/members/members";
import Events from "./components/events/events";
import DailyTask from "./components/userpanel/dailytask";
import Gallery from "./components/userpanel/gallery";
import UpdateUser from "./components/userpanel/updateuser";
import Developer from "./components/developers/developer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <div className="AppRouter">
          <Route path="/" exact component={MainLayout} />
          <Route path="/members" exact component={Members} />
          <Route path="/events" exact component={Events} />
          <Route path="/usertask" exact component={DailyTask} />
          <Route path="/userupdate" exact component={UpdateUser} />
          <Route path="/usergallery" exact component={Gallery} />
          <Route path="/developer" exact component={Developer} />
        </div>
      </Switch>
    </Router>
  );
}

export default AppRouter;
