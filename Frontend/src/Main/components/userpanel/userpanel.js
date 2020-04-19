import React, { useState } from "react";
import "./userpanel.css";
import { Link } from "react-router-dom";
import UpdateUser from "./userpanelcomponents/updateuser/updateuser";
import Navbar from "../mainlayout/mainlayoutcomp/navbar/navbar";
import Gallery from "./userpanelcomponents/gallery/gallery";
import DailyTask from "./userpanelcomponents/dailytask/dailytask";

function UserPanel() {
  const handleDailyTask = () => {};
  const handleGallery = () => {};
  const handleUpdateUser = () => {};
  return (
    <div className="UserPanel">
      <div className="UserPanel">
        <div className="userpanellayout">
          <div className="userpanelhead">
            <h1>My Account</h1>
          </div>
          <div className="usergrid">
            <div className="userlinks">
              <ul className="userlinkslist">
                <li className="active">
                  <a href="#" onClick={handleDailyTask}>
                    Daily Task
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleGallery}>
                    User Gallery
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleUpdateUser}>
                    update User
                  </a>
                </li>
              </ul>
            </div>
            <div className="loginform">
              <UpdateUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
