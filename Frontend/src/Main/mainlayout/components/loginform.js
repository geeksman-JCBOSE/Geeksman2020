import React from "react";
import ReactDom from "react-dom";
import "./css/loginform.css";
import { Link } from "react-router-dom";
import $ from "jquery";

class Loginform extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="loginbtn">
        <Link to="#">Login</Link>
      </div>
    );
  }
}

export default Loginform;
