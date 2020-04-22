import React, { Component } from "react";
import "./developer.css";
import parag from "./parag.jpeg";
import aayush from "./aayush.jpg";
import sanyam from "./sanyam.jpg";
import Navbar from "../mainlayout/mainlayoutcomp/navbar/navbar";
class Developer extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="developers">
          <div>
            <div className="developerhead">
              <h1>our developers</h1>
              <hr className="developerhr" />
            </div>

            <div className="containerm7">
              <div className="card">
                <div className="card__image-container">
                  <img className="card__image" src={aayush} />
                </div>

                <svg class="card__svg" viewBox="0 0 800 500">
                  <path
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                    stroke="transparent"
                    fill="#333"
                  />
                  <path
                    class="card__line"
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                    stroke="pink"
                    stroke-width="3"
                    fill="transparent"
                  />
                </svg>

                <div class="card__content">
                  <h1 class="card__title">Aayush Tyagi</h1>
                  <h2>Full-Stack Developer</h2>
                </div>
              </div>

              <div className="card">
                <div className="card__image-container">
                  <img className="card__image" src={parag} />
                </div>

                <svg class="card__svg" viewBox="0 0 800 500">
                  <path
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                    stroke="transparent"
                    fill="#333"
                  />
                  <path
                    class="card__line"
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                    stroke="pink"
                    stroke-width="3"
                    fill="transparent"
                  />
                </svg>

                <div class="card__content">
                  <h1 class="card__title">Parag Thakur</h1>
                  <h2>Full-stack developer</h2>
                </div>
              </div>

              <div className="card">
                <div className="card__image-container">
                  <img className="card__image" src={sanyam} />
                </div>

                <svg class="card__svg" viewBox="0 0 800 500">
                  <path
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                    stroke="transparent"
                    fill="#333"
                  />
                  <path
                    class="card__line"
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                    stroke="pink"
                    stroke-width="3"
                    fill="transparent"
                  />
                </svg>

                <div class="card__content">
                  <h1 class="card__title">Sanyam</h1>
                  <h2>Backend Developer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Developer;
