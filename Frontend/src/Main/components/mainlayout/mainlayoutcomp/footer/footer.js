import React from "react";
import ReactDom from "react-dom";
import image from "./logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="footer">
        <footer className="footer">
          <div className="footer__addr">
            <img src={image} className="ficon" id="fcusticon1" />

            <h2>Contact</h2>

            <address>
              JCBUST, Sector-6, Faridabad, Haryana, India
              <br />
              7206233857
              <br />
              aayushtyagionline@gmail.com
            </address>
          </div>

          <ul className="footer__nav">
            <li className="nav__item">
              <h1 className="footer__logo">Suscribe Us</h1>
              <a href="https://gmail.com" className="footer__btn">
                Email Us
              </a>
              <div className="fcontacticons">
                <a href="https://www.facebook.com/search/top/?q=geeksman%3A%20codechef%20campus%20chapter&epa=SEARCH_BOX">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/geeksmanymca/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/geeksman-JCBUST">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Links</h2>

              <ul className="nav__ul">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/members">Members</Link>
                </li>

                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/developers">Developers</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="legal">
            <p>&copy; 2020 Geeksman. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
