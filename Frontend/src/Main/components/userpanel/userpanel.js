import React from "react";
import "./userpanel.css";
import {Link} from 'react-router-dom'
import Navbar from '../mainlayout/mainlayoutcomp/navbar/navbar'
class UserPanel extends React.Component {
  componentDidMount() {}

  render() {
    return <div className="UserPanel">
    <Navbar />
    <div className="userpanellayout">
    <div className="userpanelhead">
      <h1>
        My Account
      </h1>
    </div>
    <div className="usergrid">
      <div className="userlinks">
      <ul className="userlinkslist">
            <li className="active"><Link to="#">Account</Link></li>
            <li><Link to="#">Account</Link></li>
            <li><Link to="#">Account</Link></li>
            <li><Link to="#">Account</Link></li>
          </ul>
      </div>
      <div className="userform">
        <div className="userformheading">
         <h1>
          Update User
         </h1>
        </div>
        <div className="updateuserform">
        <div className="emailinput">
        <for label="email" className="emaillabel">Email</for>
        <input className="emailsearch" id="email" placeholder="someone@example.com"></input>
        </div>
        <div className="namesection">
        <div className="nameslabels">
        <for label="FirstName" className="firstnamelabel">First Name</for>
        <for label="LastName" className="lastnamelabel">Last Name</for>
        </div>
         <div className="namesinputs">
         <input className="firstnameinput" placeholder="First Name"></input>
        <input className="lastnameinput" placeholder="LastName"></input>
         </div>
        </div>
        <div className="updatebtn">
           <Link href="#" className="updatebtnstyle">Update</Link>
        </div>
        </div>
        <div className="changepassform">
          <div className="changepasswordheading">
            <h1>Change Password</h1>
          </div>
          <div className="passform">
             <div className="newpass">
              <for className="newpasslabel" label="new password">New Password</for>
              <input className="newpassinput"></input>
             </div>
             <div className="confirmnew">
             <for className="newpasslabel" label="new password">Confirm New Password</for>
              <input className="newpassinput"></input>
             </div>
             <div className="updatebtn">
           <Link href="#" className="updatebtnstyle">Update</Link>
        </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>;
  }
}

export default UserPanel;
