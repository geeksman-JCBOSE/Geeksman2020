import React from "react";
import "./alumni.css";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

const Alumni = () => {
  return (
    <div className="alumnidiv">
      <div className="alumnihead">
        <h1>
          our alumni's <hr className="alumnihr2" />
        </h1>
      </div>
      <div classname="backfull">
        <div className="cars">
          <div className="online">
            <div className="carousel-wrapper">
              <div className="carousel" data-flickity>
                <div className="carousel-cell">
                  <img src={pic1} className="imagealumni" />

                  <h3>
                    <i class="fas fa-quote-left"></i>
                  </h3>
                  <p>
                    Hey,I am this and my name is this and i do this and i would
                    like to do this
                    <hr className="alumnihr" />
                  </p>
                  <h5>AMAZON</h5>
                  <div class="line"></div>
                  <div class="price">
                    <span>Manmeet</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <img src={pic2} />

                  <h3>
                    <i className="fas fa-quote-left"></i>
                  </h3>
                  <p>
                    Hey,I am this and my name is this and i do this and i would
                    like to do this
                    <hr className="alumnihr" />
                  </p>
                  <h5>DIRECTI</h5>
                  <div className="line"></div>
                  <div className="price">
                    <span>Kashish</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <img src={pic3} className="imagealumni" />

                  <h3>
                    <i class="fas fa-quote-left"></i>
                  </h3>
                  <p>
                    Hey,I am this and my name is this and i do this and i would
                    like to do this
                    <hr className="alumnihr" />
                  </p>
                  <h5>AMAZON</h5>
                  <div class="line"></div>
                  <div class="price">
                    <span>Sahil Singla</span>
                  </div>
                </div>
                <div className="carousel-cell">
                  <img src={pic3} className="imagealumni" />

                  <h3>
                    <i class="fas fa-quote-left"></i>
                  </h3>
                  <p>
                    Hey,I am this and my name is this and i do this and i would
                    like to do this
                    <hr className="alumnihr" />
                  </p>
                  <h5>SAMSUNG</h5>
                  <div class="line"></div>
                  <div class="price">
                    <span>Trilok</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
