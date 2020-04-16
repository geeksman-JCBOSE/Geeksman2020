import React from "react";
import "./members.css";
import Navbar from "../mainlayout/mainlayoutcomp/navbar/navbar";
import back from "./memtop.png";
import { Link } from "react-router-dom";

import $ from "jquery";
class Members extends React.Component {
  componentDidMount() {
    $.ajax({
      type: "GET",
      crossDomain: true,
      dataType: "json",
      url: "https://geeksman.herokuapp.com/api/members/",
      headers: {},
    }).done(function (data) {
      var obj = JSON.parse(JSON.stringify(data));
      console.log(data);
      var details = "";
      for (var i = 0; i < obj.length; i++) {
        details +=
          `
        <div class="col-sm-4">
        <div class="dcards">
          <div class="dcard">
            <div class="dimg">
              <img src="` +
          obj[i].pic +
          `" class="dimgstyle" />
            </div>
            <div class="aboutd">
              <span class="dname">` +
          obj[i].user.first_name +
          obj[i].user.last_name +
          `</span>
              <span class="dskill">` +
          obj[i].tagline +
          `</span>
            </div>
            <div class="hovermaterial">
              <div class="memberrelativwrapper">
                <div class="membersname">` +
          obj[i].user.first_name +
          "  " +
          obj[i].user.last_name +
          `</div>
                <div class="membersline">` +
          obj[i].tagline +
          `</div>
                <div class="year">year</div>
                <div class="description">` +
          obj[i].description +
          `</div>
                <div class="address">` +
          obj[i].address +
          `</div>
                <div class="icons">
                  <Link to="` +
          obj[i].github +
          `">
                    <i class="fab fa-github"></i>
                  </Link>
                  <Link to="` +
          obj[i].linkedin +
          `">
                    <i class="fab fa-linkedin"></i>
                  </Link>
                  <Link to="">
                    <i class="` +
          obj[i].user.email +
          `"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          

    `;
      }

      $("#Membersdetails").append(details);
    });
  }

  render() {
    return (
      <div className="Members">
        <Navbar />
        <div className="memtopback">
          <img src={back} className="memtopbackstyle" />
          <div className="memtop-text">
            <span className="memtop-header">Our Team</span>
            <span className="memtop-tagline">
              Our dedicated and hardwording team
            </span>
          </div>
        </div>

        <div class="row margincard" id="Membersdetails"></div>
      </div>
    );
  }
}

export default Members;
