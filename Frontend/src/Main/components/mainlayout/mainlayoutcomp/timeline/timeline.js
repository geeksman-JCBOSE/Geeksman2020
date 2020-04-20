import React from "react";
import "./timeline.css";
import { Link } from "react-router-dom";
function Timeline() {
  return (
    <div class="container timelineis">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem
                  erat.
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
