import React, { useState } from "react";
import $ from "jquery";
import "../css/userview.css";
import back from "./memtop.png";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router-dom";
function UserPanelTop() {
  const [user_name, setUser_name] = useState("");
  const history = useHistory();
  const handleLogout = () => {
    history.push("/");
    localStorage.clear();
  };
  $.ajax({
    url: "https://geeksman.herokuapp.com/api/members/?single=true",
    type: "GET",
    crossDomain: true,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    cache: false,
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
    },
    data: JSON.stringify({}),
    contentType: "application/json",
    success: function (data) {
      setUser_name(data[0].user.first_name + "'s Panel");
      localStorage.setItem("userurl", data[0].url);
      localStorage.setItem("f_name", data[0].user.first_name);
      localStorage.setItem("l_name", data[0].user.last_name);
    },
    error: function () {
      setUser_name("Please Login");
    },
  });

  return (
    <>
      <div className="memtopback">
        <img src={back} className="memtopbackstyle" />
        <div className="row">
          <div className="col-sm-10">
            <div className="memtop-text">
              <p className="memtop-header">
                <span>
                  <ReactMarkdown source={user_name} escapeHtml={true} />
                </span>
              </p>
              <span className="memtop-tagline">Learn, Grow, Evolve</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="logoutbtns hideonmob">
              <a href="#" className="updatebtnstyle" onClick={handleLogout}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserPanelTop;
