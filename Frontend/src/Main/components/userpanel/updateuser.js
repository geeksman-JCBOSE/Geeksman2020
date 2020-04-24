import React, { useState } from "react";
import "./css/updateuser.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import UserView from "./components/userview";
import ReactMarkdown from "react-markdown";
import UserPanelTop from "./components/userpaneltop";
import Navbar from "../mainlayout/mainlayoutcomp/navbar/navbar";
import { Alert } from "react-bootstrap";

function UpdateUser() {
  const [first_name, setFirst_name] = useState(localStorage.getItem("f_name"));
  const [last_name, setLast_name] = useState(localStorage.getItem("l_name"));
  const [year, setYear] = useState("");
  const [tagline, setTagline] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [github_account, setGithub_account] = useState(null);
  const [linkedln_account, setLinkedln_account] = useState(null);
  const [status, setStatus] = useState("");
  const [alertcolor, setAlertcolor] = useState("light");

  const handlePost = (e) => {
    if (branch === "") {
      setStatus("fill branch");
      setAlertcolor("danger");
    } else if (phone_no.length != 10) {
      setStatus("Enter Valid Phone Number");
      setAlertcolor("danger");
    } else if (tagline === "") {
      setStatus("fill tagline");
      setAlertcolor("danger");
    } else if (address === "") {
      setStatus("fill address");
      setAlertcolor("danger");
    } else if (year === "") {
      setStatus("fill year");
      setAlertcolor("danger");
    } else if (skill === "") {
      setStatus("fill skills");
      setAlertcolor("danger");
    } else if (picture === "") {
      setStatus("fill correct picture url");
      setAlertcolor("danger");
    } else {
      $.ajax({
        url: localStorage.getItem("userurl"),
        type: "PATCH",
        crossDomain: true,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
        data: JSON.stringify({
          phone_number: phone_no,
          tagline: tagline,
          year: year,
          address: address,
          description: description,
          skills: [skill],
          pic: picture,
          branch: branch,
          github: github_account,
          linkedin: linkedln_account,
        }),
        contentType: "application/json",
        success: function (data) {
          setStatus("Details Updated Successfully");
          setAlertcolor("success");
          alert("success");
        },
        error: function () {
          setStatus("Sorry Error Occured Check Pic Url");
          setAlertcolor("danger");
        },
      });
    }
  };

  return (
    <>
      <Navbar />
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
                        value={first_name}
                        disabled
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
                        value={last_name}
                        disabled
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
                      <for label="year" className="labels">
                        Branch
                      </for>

                      <select
                        id="inputState"
                        class="form-control"
                        onChange={(e) => setBranch(e.target.value)}
                        value={branch}
                      >
                        <option selected value="CE">
                          CE
                        </option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="ECS">ECS</option>
                        <option value="Mech">Mech</option>
                        <option value="El">El</option>
                        <option value="Civil">Civil</option>
                        <option value="BSC">BSC</option>
                        <option value="MSC">MSC</option>
                      </select>
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

                  <for label="year" className="labels">
                    Skills
                  </for>

                  <select
                    id="inputState"
                    class="form-control"
                    onChange={(e) => setSkill(e.target.value)}
                    value={skill}
                  >
                    <option selected value="10">
                      competitive
                    </option>
                    <option value="11">web(frontend)</option>
                    <option value="12">web(backend)</option>
                    <option value="13">ML</option>
                    <option value="14">Android</option>
                    <option value="15">Others</option>
                  </select>
                  <for label="address" className="labels">
                    Pic Url
                  </for>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Eg- https://aayush.pic.jpg"
                    onChange={(e) => setPicture(e.target.value)}
                    value={picture}
                  />
                  <div id="alertdiv">
                    {" "}
                    <Alert variant={alertcolor}>
                      <ReactMarkdown source={status} escapeHtml={true} />
                    </Alert>
                  </div>

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
