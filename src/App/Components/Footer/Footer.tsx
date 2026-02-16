import "./Footer.scss";

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import privacyPolicy from "../../../Media/documents/Privacy Policy.pdf";
import termsOfService from "../../../Media/documents/Terms of Service.pdf";
import facebook from "../../../Media/graphics/facebook-custom.png";
import logo from "../../../Media/graphics/logo.png";
import Bam from "../Bam/Bam";

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
    const date = new Date();
    const year = date.getFullYear();

    return (
      <div id="footer">
        <NavLink id="footer-logoContainer" exact={true} to="/">
          <img src={logo} id="footer-logo" alt="Harold Myers logo" />
        </NavLink>
        <div id="footer-links">{this.footerLinks()}</div>
        <div id="footer-info">
          <div id="footer-docs">
            <a
              className="footer-doc"
              href={termsOfService}
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>

            <a
              className="footer-doc"
              href={privacyPolicy}
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </div>
          <div
            id="footer-facebookLink"
            onClick={() => (window.location.href = this.state.facebookLink)}
          >
            <img id="footer-facebookLogo" src={facebook} alt="facebook link" />
          </div>
          <div id="footer-copyright">&copy; {year} Harold Myers Inc.</div>
          <Bam />
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
