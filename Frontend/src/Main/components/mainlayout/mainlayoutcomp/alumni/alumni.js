import React, { Component } from "react";
import "./alumni.css";
import $ from "jquery";

import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

import pic4 from "./trilok.jpeg";
class Alumni extends Component {
  componentDidMount() {
    var cardSpaces = 15;
    var middleDistance = 200;

    var nxtVal = middleDistance;
    middleDistance -= cardSpaces;
    $(".next").each(function () {
      $(this).attr("elad-translate", nxtVal);
      $(this).css(
        "transform",
        "translateX(calc(-50% + " + nxtVal + "px)) rotateY(-70deg) skewY(9deg)"
      );
      nxtVal += cardSpaces;
    });

    $("#navright").click(function () {
      if ($(".active").next().hasClass("slideItems")) {
        $(".active")
          .removeClass("active")
          .addClass("prev")
          .attr("elad-translate", middleDistance)
          .next()
          .addClass("active")
          .removeClass("next")
          .removeAttr("style")
          .attr("elad-translate", "0");

        $(".next").each(function () {
          var thisTrans = parseInt($(this).attr("elad-translate")) - cardSpaces;
          $(this).css(
            "transform",
            "translateX(calc(-50% + " +
              thisTrans +
              "px)) rotateY(-70deg) skewY(9deg)"
          );
          $(this).attr("elad-translate", thisTrans);
          // nxtVal+=cardSpaces;
        });

        $(".prev").each(function () {
          var thisTrans = parseInt($(this).attr("elad-translate")) + cardSpaces;
          $(this).css(
            "transform",
            "translateX(calc(-50% - " +
              thisTrans +
              "px)) rotateY(70deg) skewY(-9deg)"
          );
          $(this).attr("elad-translate", thisTrans);
          // nxtVal+=cardSpaces;
        });
      }
    });
    $("#navleft").click(function () {
      if ($(".active").prev().hasClass("slideItems")) {
        $(".active")
          .removeClass("active")
          .addClass("next")
          .attr("elad-translate", middleDistance)
          .prev()
          .addClass("active")
          .removeClass("prev")
          .removeAttr("style")
          .attr("elad-translate", "0");

        $(".next").each(function () {
          var thisTrans = parseInt($(this).attr("elad-translate")) + cardSpaces;
          $(this).css(
            "transform",
            "translateX(calc(-50% + " +
              thisTrans +
              "px)) rotateY(-70deg) skewY(9deg)"
          );
          $(this).attr("elad-translate", thisTrans);
          // nxtVal+=cardSpaces;
        });

        $(".prev").each(function () {
          var thisTrans = parseInt($(this).attr("elad-translate")) - cardSpaces;
          $(this).css(
            "transform",
            "translateX(calc(-50% - " +
              thisTrans +
              "px)) rotateY(70deg) skewY(-9deg)"
          );
          $(this).attr("elad-translate", thisTrans);
          // nxtVal+=cardSpaces;
        });
      }
    });
  }

  render() {
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
              <div class="container">
                <div class="middleArea"></div>
                <div class="mySlider">
                  <div class="slideItems item1 active">
                    <div>
                      <img src={pic1} className="cardimgstyle"></img>
                    </div>
                    <div className="card-content">
                      <p>
                        Amazon
                        <br />
                        A passionate and a hard working human being
                        <hr className="alumnihr" />
                      </p>
                      <h1>Manmeet Kalirawana</h1>
                    </div>
                  </div>
                  <div class="slideItems item2 next">
                    <div>
                      <img src={pic2} className="cardimgstyle"></img>
                    </div>
                    <div className="card-content">
                      <p>
                        Directi
                        <br />A five star coder and a down to earth human being
                        <hr className="alumnihr" />
                      </p>
                      <h1>Kashish</h1>
                    </div>
                  </div>
                  <div class="slideItems item3 next">
                    <div>
                      <img src={pic3} className="cardimgstyle"></img>
                    </div>
                    <div className="card-content">
                      <p>
                        Amazon
                        <br />
                        Our founding member, who is pro in everything
                        <hr className="alumnihr" />
                      </p>
                      <h1>Sahil Singla</h1>
                    </div>
                  </div>
                  <div class="slideItems item4 next">
                    <div>
                      <img src={pic4} className="cardimgstyle"></img>
                    </div>
                    <div className="card-content">
                      <p>
                        Samsung
                        <br />
                        The person behind the idea of geeksman
                        <hr className="alumnihr" />
                      </p>
                      <h1>Trilok Kaushik</h1>
                    </div>
                  </div>
                </div>
                <div class="myNavs">
                  <div class="left">
                    <i id="navleft" class="fa fa-caret-left"></i>
                  </div>
                  <div class="right">
                    <i id="navright" class="fa fa-caret-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Alumni;
