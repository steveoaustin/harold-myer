import React, { Component } from "react";
import logo from "../../../Media/graphics/logo.svg";
import { NavLink } from "react-router-dom";
import facebook from "../../../Media/graphics/facebook.png";

import "./Footer.scss";

const sanityClient = require("@sanity/client");

class Footer extends Component {
  state: {
    facebookLink: string;
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = { facebookLink: "" };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(`*[_type == "companyInfo"]{facebookLink}[0]`)
      .then((result: any) => {
        this.setState({
          facebookLink: result.facebookLink
        });
      });
  }

  render() {
    return (
      <div id="footer">
        <div id="footer-logoContainer">
          <NavLink exact={true} to="/">
            <div id="footer-logoBackground">
              <img src={logo} id="footer-logo" alt="Harold Myers logo" />
            </div>
          </NavLink>
        </div>
        <div id="footer-links">{this.footerLinks()}</div>
        <div id="footer-info">
          <div
            id="footer-facebookLink"
            onClick={() => (window.location.href = this.state.facebookLink)}
          >
            <img id="footer-facebookLogo" src={facebook} alt="facebook link" />
          </div>
          <div id="footer-copyright">&copy; 2019 Harold Myers Inc.</div>
          <a id="footer-siteBy" href="https://www.ab-websites.com">
            Built by AB Website Development
          </a>
        </div>
      </div>
    );
  }

  footerLinks() {
    return (
      <ul className="footer-links">
        <li className="footer-linkContainer">
          <NavLink exact={true} to="/aboutUs" className="footer-link">
            <span className="footer-linkText">ABOUT US</span>
          </NavLink>
        </li>
        <li className="footer-linkContainer">
          <NavLink exact={true} to="/services" className="footer-link">
            <span className="footer-linkText">SERVICES</span>
          </NavLink>
        </li>
        <li className="footer-linkContainer">
          <NavLink exact={true} to="/payment" className="footer-link">
            <span className="footer-linkText">PAYMENT</span>
          </NavLink>
        </li>
        <li className="footer-linkContainer">
          <NavLink exact={true} to="/testimonials" className="footer-link">
            <span className="footer-linkText">TESTIMONIALS</span>
          </NavLink>
        </li>
        <li className="footer-linkContainer">
          <NavLink exact={true} to="/contactUs" className="footer-link">
            <span className="footer-linkText">CONTACT US</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Footer;
