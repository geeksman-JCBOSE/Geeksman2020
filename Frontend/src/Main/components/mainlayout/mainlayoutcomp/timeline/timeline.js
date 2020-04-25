import React from "react";
import "./timeline.css";
import { Link } from "react-router-dom";
function Timeline() {
  return (
    <div class="container timelineis">
      <h1 className="timelineheading">our timeline</h1>
      <hr className="timelinehr" />
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline5">
            <div class="timeline">
              <div class="timeline-icon">
                <span class="year">2020</span>
              </div>
              <div class="timeline-content">
                <h3 class="title">Website Created</h3>
                <p class="description">
                  The website of geeksman is fully functional and ready to serve
                  its members became a huge success for the club
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline-icon">
                <span class="year">2019</span>
              </div>
              <div class="timeline-content">
                <h3 class="title">Club Became Official</h3>
                <p class="description">
                  Finally the club gets its recognition as the official codechef
                  campus chapter of JCBUST, under the guidance of Ms Neelan
                  Duhan, the club coordinator
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline-icon">
                <span class="year">2018</span>
              </div>
              <div class="timeline-content">
                <h3 class="title">First Batch</h3>
                <p class="description">
                  The first batch 2k18 batch came to the club with proper
                  auditions and paved the way of glory for the club, by working
                  hard and leaving no stone unterned
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline-icon">
                <span class="year">2017</span>
              </div>
              <div class="timeline-content">
                <h3 class="title">Geeksman Started</h3>
                <p class="description">
                  The club started with only two founding members (Mr Trilok and
                  Mr Sahil), who started teaching soke juniors for the benifit
                  of their juniors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
