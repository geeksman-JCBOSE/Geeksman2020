import React from "react";
import "./about.css";

import { Link } from "react-router-dom";
class About extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div>
          <div className="aboutdiv">
            <div className="row">
              <div className="col40 hidemob">
                <i class="fas fa-quote-left aboutheadingicon"></i>
              </div>
              <div className="col60 hidemob">
                <h1 className="aboutusheading"> about us</h1>
                <hr className="abouthr" />
              </div>
            </div>
            <h1 className="aboutusheading hidepc"> about</h1>

            <div className="contentdiv ">
              <p className="aboutcontent">
                <p className="wecode">we code therefore we are</p>
                Well, our name tells all about us, we are the geeks, who love to
                code!!. Infact,we bleed code! Sounds geeky ? Welcome to
                Geeksman, official coding club of JCBUST, Faridabad. Geeksman is
                all about nourishing your coding skills and is highly biased
                towards promoting coding culture in the campus. Previously it
                was a part of Codechef campus chapter later on it has been
                approved as an official coding club of YMCA. Coding Contests,
                Hackathons are the primary siblings of Geeksman. This Dynamic
                club of JCBUST was found approximately an year ago by 4 Alumni's
                of the college (currently placed in giant MNC's like Samsung,
                Amazon , Directi) with a moto of developing the environment of
                competetive programming and to develop the art of problem
                solving among students. 
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
