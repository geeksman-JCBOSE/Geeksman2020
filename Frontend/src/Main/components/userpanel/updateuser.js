import React, { useState } from "react";
import "./css/updateuser.css";
import { Link } from "react-router-dom";
import back from "../members/memtop.png";
import $ from "jquery";
import Navbar from "../mainlayout/mainlayoutcomp/navbar/navbar";
import ReactMarkdown from "react-markdown";
function UpdateUser() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [year, setYear] = useState("");
  const [tagline, setTagline] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [github_account, setGithub_account] = useState("");
  const [linkedln_account, setLinkedln_account] = useState("");
  const [status, setStatus] = useState("");
  const handlePost = () => {
    $.ajax({
      url: "http://geeksman.herokuapp.com/members/",
      type: "POST",
      crossDomain: true,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      cache: false,
      data: JSON.stringify({}),
      contentType: "application/json",
      success: function (data) {
        setStatus("Details Updated Successfully");
      },
      error: function () {
        setStatus("Sorry Error Occured");
      },
    });
  };
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
                <li>
                  <Link to="/usergallery">User Gallery</Link>
                </li>
                <li className="active">
                  <Link to="/userupdate">update User</Link>
                </li>
              </ul>
            </div>
            <div className="loginform">
              <div className="userform">
                <div className="updateuserform">
                  <div className="row">
                    <div className="col-sm-6">
                      <for label="year" className="labels">
                        First Name
                      </for>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) => setFirst_name(e.target.value)}
                        value={first_name}
                      />
                    </div>
                    <div className="col-sm-6 namefield">
                      <for label="year" className="labels">
                        Last Name
                      </for>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={(e) => setLast_name(e.target.value)}
                        value={last_name}
                      />
                    </div>
                  </div>

                  <for label="tagline" className="labels">
                    Tagline
                  </for>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                  />

                  <div className="row">
                    <div className="col-sm-6">
                      <for label="year" className="labels">
                        Year
                      </for>

                      <select
                        id="inputState"
                        class="form-control"
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                      >
                        <option selected value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="col-sm-6 namefield">
                      <for label="branch" className="labels">
                        Branch
                      </for>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Eg - ECE"
                        onChange={(e) => setBranch(e.target.value)}
                        value={branch}
                      />
                    </div>
                  </div>

                  <for label="address" className="labels">
                    Address
                  </for>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Eg- Faridabad, India"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />

                  <for className="labels">Description</for>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Your description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />

                  <for label="phone" className="labels">
                    Phone No.
                  </for>
                  <input
                    type="input"
                    className="form-control"
                    placeholder="+91-00-000-000-00"
                    onChange={(e) => setPhone_no(e.target.value)}
                    value={phone_no}
                  />

                  <div class="row">
                    <div className="col-sm-6">
                      <for className="labels" label="git">
                        GitHub Account
                      </for>
                      <input
                        type="url"
                        className="form-control"
                        placeholder="Eg-https://github.com/aayushme"
                        onChange={(e) => setGithub_account(e.target.value)}
                        value={github_account}
                      />
                    </div>
                    <div className="col-sm-6 namefield">
                      <for label="linkein" className="labels">
                        LinkedIn Account
                      </for>
                      <input
                        type="url"
                        class="form-control"
                        placeholder="Eg- https://www.linkedin.com/in/aayush-tyagi-30a293185/"
                        onChange={(e) => setLinkedln_account(e.target.value)}
                        value={linkedln_account}
                      />
                    </div>
                  </div>
                  <ReactMarkdown
                    className="Statustext text-center"
                    source={status}
                    escapeHtml={false}
                  />
                  <div className="updatebtn">
                    <Link
                      href="#"
                      className="updatebtnstyle"
                      onClick={handlePost}
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateUser;
