import React from "react";
import "./css/gallery.css";
import UserPanelTop from "./components/userpaneltop";
import { Link } from "react-router-dom";
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
      details +=
        `
      <div class="card">
      <div
        class="card-body text-left"><p class="lead">` +
        obj[i].name +
        `</p><a class="gallerylink" href="` +
        obj[i].link +
        `">Link Here
        </a>
        <p >Publish Date <span class="redtext">` +
        obj[i].date +
        `</span></p></div>
    </div>
        
  `;
    }

    $("#gallerydivison").append(details);
  });

  return (
    <>
      <UserPanelTop />
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
