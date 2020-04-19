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
        <div className="yeardiv">
        <for label="year" className="yearlabel">Year</for>
        <input className="yearinput" placeholder="Enter your year" id="label"></input>
        </div>
        <div className="taglinediv">
        <for label="tagline" className="taglinelabel">Tagline</for>
        <input className="taglineinput" id="tagline" placeholder="Eg.I am a competitive programmer"></input>
        </div>
        <div className="branchdiv">
          <for label="branch" className="branchlabel">Branch</for>
          <input id="branch" placeholder="Enter your branch" className="branchinput"></input>
        </div>
        <div className="addressdiv">
          <for label="address" className="addresslabel">Address</for>
          <input className="addressinput" type="address" id="address" placeholder="Eg. Faridabad,India"></input>
        </div>
        <div className="descriptiondiv">
        <for className="descriptionlabel">Description</for>
        <textarea className="descriptioninput"></textarea>
        </div>
        <div className="phonediv">
        <for label="phone" className="phonelabel">Phone No.</for>
        <input className="phoneinput" type="phonenumber" placeholder="000-000-000-0"></input>
        </div>
        <div className="gitdiv">
          <for className="gitlabel" label="git">GitHub Account</for>
          <input className="gitinput" id="git"></input>
        </div>
        <div className="linkeddiv">
          <for label="linkein"  className="linkedlabel">LinkedIn Account</for>
          <input className="linkedinput" id="linkedin"></input>
        </div>
        <div className="skillsdiv">
          <for label="skills" className="skillslabel">Skills</for>
          <textarea id="skills" className="skillsinput"></textarea>
        </div>
        <div className="imgdiv">
          <for className="imglabel" label="img">Image</for>
          <input type="file" className="imginput" name="img"></input>
        </div>
        <div className="updatebtn">
           <Link href="#" className="updatebtnstyle">Update</Link>
        </div>
        </div>
      
      </div>
    </div>
    </div>
    </div>;
  }
}

export default UserPanel;
