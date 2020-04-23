import React, { useState } from "react";
import "../css/userview.css";
import { Link } from "react-router-dom";

function UserView() {
  return (
    <>
      <div className="hideonpc">
        <div className="userlinks">
          <ul className="userlinkslist">
            <li className="listitems">
              <Link to="/usertask">Daily Task</Link>
            </li>
            <li className="listitems">
              <Link to="/usergallery">User Gallery</Link>
            </li>
            <li className="listitems">
              <Link to="/userupdate">update User</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default UserView;
