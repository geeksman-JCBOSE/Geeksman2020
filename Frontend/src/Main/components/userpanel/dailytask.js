import React, { useState } from "react";
import "./css/dailytask.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import UserPanelTop from "./components/userpaneltop";

function DailyTask() {
  $.ajax({
    type: "GET",
    crossDomain: true,
    dataType: "json",
    url: "https://geeksman.herokuapp.com/api/tasks/",
    headers: {},
  }).done(function (data) {
    var obj = JSON.parse(JSON.stringify(data));
    console.log(data);
    var details = "";
    for (var i = 0; i < obj.length; i++) {
      details +=
        `<div class="card">
      <div
        class="card-body text-left"><p class="lead">` +
        obj[i].name +
        `</p>
        <p class="taskname">` +
        obj[i].submit_info +
        `</p>
        <p >Deadline <span class="redtext">` +
        obj[i].deadline +
        `</span></p></div>
    </div>
                      
        
  `;
    }

    $("#dailytaskdivison").append(details);
  });

  var date =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
  return (
    <>
      <UserPanelTop />
      <div className="UserPanel">
        <div className="userpanellayout">
          <div className="usergrid">
            <div className="userlinks">
              <ul className="userlinkslist">
                <li className="active">
                  <Link to="/usertask">Daily Task</Link>
                </li>
                <li>
                  <Link to="/usergallery">User Gallery</Link>
                </li>
                <li>
                  <Link to="/userupdate">update User</Link>
                </li>
              </ul>
            </div>
            <div className="loginform">
              <div className="dailytask">
                <div className="ddate">{date}</div>
                <div id="dailytaskdivison">{""}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DailyTask;
