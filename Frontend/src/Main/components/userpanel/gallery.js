import React from "react";
import "./css/gallery.css";
import UserPanelTop from "./components/userpaneltop";
import { Link } from "react-router-dom";
import $ from "jquery";
import UserView from "./components/userview";

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
        <div class="col-sm-4">
        <div class="gcards-list">
          <div class="gcard 1">
            <div class="gcard_image">
              <img src="./gallerycard.jpg" />
            </div>
            <div class="gcard_title title-white">
              <p>` +
        obj[i].name +
        `</p>
            </div>
          </div>
        </div>
      </div>
        
  `;
    }

    $("#gallerydivison").append(details);
  });

  return (
    <>
      <UserPanelTop />
      <UserView />
      <div className="UserPanel">
        <div className="userpanellayout">
          <div className="usergrid">
            <div className="userlinks">
              <ul className="userlinkslist hideonmob">
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
                <div className="row" id="gallerydivison">
                  {""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
