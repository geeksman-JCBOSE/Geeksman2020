import React from "react";
import ReactDom from "react-dom";
import "./members.css";
import back from "./memtop.png";
import { Link } from "react-router-dom";
import image from "./IMG_1010.JPG";
import Navbar from "../mainlayout/components/Navbar";
import $ from "jquery";
class Members extends React.Component {
  componentDidMount() {
    /*-----AJAX CALL--------*/
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
        details += `
        <div className="dcards">
        <div className="dcard">
          <div className="dimg">
            <img src={image} className="dimgstyle" />
          </div>
          <div className="aboutd">
            <span className="dname">Name</span>
            <span className="dskill">Tagline</span>
          </div>
          <div className="hovermaterial">
            <div className="memberrelativwrapper">
              <div className="membersname">Name</div>
              <div className="membersline">tagline</div>
              <div className="year">year</div>
              <div className="description">about</div>
              <div className="address">address</div>
              <div className="icons">
                <Link to="#">
                  <i class="fab fa-github"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-linkedin"></i>
                </Link>
                <Link to="#">
                  <i className=""></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
           
      `;
      }

      $("#LeaderboardStats").append(details);
    });
  }
  handleload = () => {
    const d = document.querySelector(".d");
    const heightd = d.getBoundingClientRect();
    const body = document.querySelector("body");
    const heighbody = body.getBoundingClientRect();
    const m = document.querySelector("body");
  };
  render() {
    return (
      <div className="navbar">
        <div>
          <Navbar />
        </div>
        <div className="memtopback">
          <img src={back} className="memtopbackstyle" />
          <div className="memtop-text">
            <span className="memtop-header">Our Team</span>
            <span className="memtop-tagline">
              Our dedicated and hardwording team
            </span>
          </div>
        </div>
        <div className="md" onLoad={this.handleload}>
          <div className="d">
            <div className="dh"></div>
            <div class="row">
              <div className="dcards">
                <div className="dcard">
                  <div className="dimg">
                    <img src={image} className="dimgstyle" />
                  </div>
                  <div className="aboutd">
                    <span className="dname">Name</span>
                    <span className="dskill">Tagline</span>
                  </div>
                  <div className="hovermaterial">
                    <div className="memberrelativwrapper">
                      <div className="membersname">Name</div>
                      <div className="membersline">tagline</div>
                      <div className="year">year</div>
                      <div className="description">about</div>
                      <div className="address">address</div>
                      <div className="icons">
                        <Link to="#">
                          <i class="fab fa-github"></i>
                        </Link>
                        <Link to="#">
                          <i class="fab fa-linkedin"></i>
                        </Link>
                        <Link to="#">
                          <i className=""></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
