import React from "react";
import "./events.css";
import eventop from "../members/memtop.png";
import Navbar from "../mainlayout/mainlayoutcomp/navbar/navbar";
import { Link } from "react-router-dom";
import $ from "jquery";
class Events extends React.Component {
  componentDidMount() {
    $.ajax({
      type: "GET",
      crossDomain: true,
      dataType: "json",
      url: "https://geeksman.herokuapp.com/api/events/",
      headers: {},
    }).done(function (data) {
      var obj = JSON.parse(JSON.stringify(data));

      var details = "";
      var pastdetails = "";
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].status == "Upcoming") {
          details +=
            `
          <div class="col-sm-6">
          <div class="eventscards">
            <div class="upcomingcards">
              <div class="ucardsblock">
                <div class="ucardblock">
                  <div class="uimgblock">
                    <img src="` +
            obj[i].pic +
            `" class="uimgstyle" />
                  </div>
                  <div class="ucontent">
                    <div class="ucontenttiming">
                      <p class="lead ">
                        <span class="bold">` +
            obj[i].name +
            `</span>
                      </p>
                      <p class="description">
                        ` +
            obj[i].details +
            `
                      </p>

                      <div class="date">Date&Time : <span class="redtext"> ` +
            obj[i].date_time +
            `</span></div>
                      <div class="venue">Venue: <span class="redtext"> ` +
            obj[i].venue +
            `</span></div>
                      <div class="venue">Entry Fee :<span class="redtext"> ` +
            (obj[i].entry_fee == "0" ? "Free" : obj[i].entry_fee) +
            `</span></div>
                    </div>

                    <div class="ucontentbtn">
                      <Link to="#" class="ucontentbtnstyle">
                        Register Now!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
        } else {
          pastdetails +=
            `<div class="col-sm-6">
          <div class="pastcards">
            <div class="upcomingheading"></div>
            <div class="ucardsblock">
              <div class="ucardblock">
                <div class="uimgblock">
                  <img src="` +
            obj[i].pic +
            `" class="puimgstyle" />
                </div>
                <div class="ucontent">
                  <div class="ucontenttiming">
                    <p class="lead ">
                      <span class="bold">` +
            obj[i].name +
            `</span>
                    </p>
                    <p class="description">
                    ` +
            obj[i].details +
            `
                    </p>

                    <div class="date">Date&Time:` +
            obj[i].date_time +
            `</div>
                    <div class="venue">Venue: <span class="redtext">` +
            obj[i].venue +
            `</span></div>
                    <div class="venue">Entry Fee : <span class="redtext">  ` +
            (obj[i].entry_fee == "0" ? "Free" : obj[i].entry_fee) +
            `</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;
        }
      }

      $("#UpcomingEventdetails").append(details);
      $("#PastEventdetails").append(pastdetails);
    });
  }
  handleclick2 = () => {
    let clickon = document.querySelector(".clickon");
    clickon.style.display = "block";
  };
  render() {
    return (
      <div className="Events">
        <div className="Events">
          <div>
            <Navbar />
          </div>
          <div className="eventstop">
            <img src={eventop} className="eventstopstyle" />
            <div className="eventmessage">
              <span className="eventheader">Events</span>
              <span className="eventtag">Learn,Compete & Grow</span>
            </div>
          </div>
          <div class="jumbotron">
            <p class="lead text-left">
              <span class="bold">Upcoming</span> Events
            </p>
            <div class="row" id="UpcomingEventdetails"></div>

            <h1 class="lead text-left">
              <span class="bold">Past</span> Events
            </h1>
            <div className="row" id="PastEventdetails"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
