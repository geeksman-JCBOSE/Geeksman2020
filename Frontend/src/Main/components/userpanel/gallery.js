import React from "react";
import "./css/gallery.css";
import back from "../members/memtop.png";
import { Link } from "react-router-dom";
import Navbar from "../mainlayout/mainlayoutcomp/navbar/navbar";
import $ from "jquery";

function Gallery() {
  $.ajax({
    type: "GET",
    crossDomain: true,
    dataType: "json",
    url: "https://geeksman.herokuapp.com/api/gallery/",
    headers: {},
  }).done(function (data) {
    var obj = JSON.parse(JSON.stringify(data));
    console.log(data);
    var details = "";
    for (var i = 0; i < obj.length; i++) {
      details += `
      <div class="card">
      <div
        class="card-body text-left"><p class="lead">Task 1</p>
        <p class="taskname">Task Name</p>
        <p class="redtext">Submission date</p></div>
    </div>
        
  `;
    }

    $("#gallerydivison").append(details);
  });

  return (
    <>
      <Navbar />
      <div className="memtopback">
        <img src={back} className="memtopbackstyle" />
        <div className="memtop-text">
          <span className="memtop-header">Panel</span>
          <span className="memtop-tagline">Learn, Grow, Evolve</span>
        </div>
      </div>
      <div className="UserPanel">
        <div className="userpanellayout">
          <div className="usergrid">
            <div className="userlinks">
              <ul className="userlinkslist">
                <li>
                  <Link to="/usertask">Daily Task</Link>
                </li>
                <li className="active">
                  <Link to="/usergallery">User Gallery</Link>
                </li>
                <li>
                  <Link to="/userupdate">update User</Link>
                </li>
              </ul>
            </div>
            <div className="loginform">
              <div className="dailytask">
                <div className="ddates">Your Gallery</div>
                <div id="gallerydivison">{""}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
