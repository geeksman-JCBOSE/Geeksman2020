import React, { useState } from "react";
import "./loginform.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function LoginForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="loginbtn">
        <Link to="#" onClick={handleShow}>
          Login
        </Link>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span className="lead">Login</span>
        </Modal.Header>

        <Modal.Body>
          <div class="form">
            <form class="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
            </form>
          </div>
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
