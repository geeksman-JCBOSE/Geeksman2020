import React from "react";
import "./loginform.css";
import { Link, Navlink } from "react-router-dom";
class LoginForm extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="loginbtn">
          <Link to="#">Login</Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;
