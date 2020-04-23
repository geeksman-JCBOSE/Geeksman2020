import React, { useState } from "react";
import "./loginform.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [loginstat, setLoginstat] = useState(" ");
  const [user_name, setUser_name] = useState("");
  const [pwd, setPwd] = useState("");
  const [alertcss, setAlertcss] = useState("");
  const [login, setLogin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = (e) => {
    e.preventDefault();
    $.ajax({
      url: "https://geeksman.herokuapp.com/api-token-auth/",
      type: "POST",
      crossDomain: true,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      cache: false,
      data: JSON.stringify({
        username: user_name,
        password: pwd,
      }),
      contentType: "application/json",
      success: function (data) {
        var tokenis = data.token;
        setLoginstat("Welcome User Redirecting....");
        localStorage.setItem("token", tokenis);
        history.push("./usergallery");
        setLogin(true);
        setAlertcss("Statustext");
      },
      error: function () {
        setLoginstat("Retry Again");
        setAlertcss("Statustextred");
      },
    });
  };

  const loginbutton = (
    <div className="loginbtn">
      <Link to="#" onClick={handleShow}>
        Login
      </Link>
    </div>
  );

  return (
    <>
      <div>{loginbutton}</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span className="lead">Login</span>
        </Modal.Header>

        <Modal.Body>
          <div class="form">
            <form class="login-form">
              <input
                type="text"
                name="UsernameField"
                placeholder="username"
                onChange={(e) => setUser_name(e.target.value)}
                value={user_name}
              />
              <input
                type="password"
                name="PasswordField"
                placeholder="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />

              <button onClick={handleLogin}>login</button>
            </form>
          </div>
          <ReactMarkdown
            className={alertcss}
            source={loginstat}
            escapeHtml={false}
          />
        </Modal.Body>
        <Modal.Footer>
          <i class="fab fa-instagram social"></i>
          <i class="fab fa-facebook social"></i>
          <i class="fab fa-github social"></i>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginForm;
