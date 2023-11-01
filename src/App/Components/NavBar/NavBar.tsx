import "./NavBar.scss";

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";

import { Icon } from "@material-ui/core";

import facebook from "../../../Media/graphics/facebook-custom.png";
import logo from "../../../Media/graphics/logo.png";

const sanityClient = require("@sanity/client");

class NavBar extends Component {
  state: {
    phone: string;
    phoneParsed: string;
    address: string;
    facebook: string;
    showServicesTop: boolean;
    showServicesSticky: boolean;
    showStickyNavBar: boolean;
    showTopMobileLinks: boolean;
    showStickyMobileLinks: boolean;
    displayingTopMobileMenu: boolean | undefined;
    displayingStickyMobileMenu: boolean | undefined;
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = {
      phone: "",
      phoneParsed: "",
      address: "",
      facebook: "",
      showServicesTop: false,
      showServicesSticky: false,
      showStickyNavBar: false,
      showTopMobileLinks: false,
      showStickyMobileLinks: false,
      displayingTopMobileMenu: undefined,
      displayingStickyMobileMenu: undefined
    };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(`*[_type == "companyInfo"]{phoneNumber, address, facebookLink}[0]`)
      .then((result: any) => {
        this.setState({
          phone: result.phoneNumber,
          phoneParsed: this.parsePhoneNumber(result.phoneNumber),
          address: result.address,
          facebook: result.facebookLink
        });
      });
  }

  parsePhoneNumber(phoneStr: string): string {
    // Remove all non-numeric characters from the phone string
    let parsedNumber = phoneStr.replace(/\D/g, "");
    return parsedNumber;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("scroll", (e) => this.checkScrollPosition());
      window.addEventListener("resize", () => this.handleResize());
      this.handleResize();
    }
  }

  handleResize() {
    this.setState({ showTopMobileLinks: false, showStickyMobileLinks: false });
    if (window) {
      // check if the top bar has mobile menu
      const topMenu = document.getElementById("navBar-topNavMobileMenu");
      if (topMenu) {
        this.setState({
          displayingTopMobileMenu: !(
            window.getComputedStyle(topMenu).display === "none"
          )
        });
      }

      // check if the sticky bar has mobile menu
      const stickyMenu = document.getElementById("navBar-stickyNavMobileMenu");
      if (stickyMenu) {
        this.setState({
          displayingStickyMobileMenu: !(
            window.getComputedStyle(stickyMenu).display === "none"
          )
        });
      }
    }
  }

  checkScrollPosition() {
    if (window) {
      const position = window.pageYOffset;
      const headerBar = document.getElementById("navBar-topBarContainer");
      if (!headerBar) return;
      const headerBarHeight = headerBar.clientHeight;
      if (position - headerBarHeight > 50) {
        this.setState({ showStickyNavBar: true });
      } else {
        this.setState({
          showStickyNavBar: false,
          showStickyMobileLinks: false
        });
      }
    }
  }

  stopClickPropagation(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopPropagation();
  }

  render() {
    return (
      <div id="navBar-container">
        <div id="navBar-topBarContainer">
          {this.infoBar()}
          <div id="navBar-navigation">
            <NavLink exact={true} to="/" id="navBar-logoHomeLink">
              <img id="navBar-companyLogo" src={logo} alt="Harold Myers Logo" />
              <span id="navBar-companyName">
                Harold Myers Inc.
                <div id="navBar-trustedSince">Trusted Since 1939</div>
              </span>
              <div
                id="navBar-topNavMobileMenu"
                className="navBar-mobileNavMenu"
                onClick={(e) => {
                  this.stopClickPropagation(e);
                  this.setState({
                    showTopMobileLinks: !this.state.showTopMobileLinks
                  });
                }}
              >
                <Icon className="navBar-mobileLinksMenu">menu</Icon>
              </div>
            </NavLink>

            <SlideDown
              className="navBar-linkSlidedown"
              closed={
                this.state.displayingTopMobileMenu === undefined ||
                (this.state.displayingTopMobileMenu &&
                  !this.state.showTopMobileLinks)
              }
              transitionOnAppear={true}
            >
              {this.navLinks(this.state.showTopMobileLinks, true)}
            </SlideDown>
          </div>
        </div>
      </div>
    );
  }

  infoBar() {
    return (
      <div id="navBar-infoBar">
        <div
          id="navBar-facebookLink"
          onClick={() => (window.location.href = this.state.facebook)}
        >
          <img id="navBar-facebookLogo" src={facebook} alt="facebook link" />
        </div>
        <a href={`tel:${this.state.phoneParsed}`} id="navBar-phoneNumber">
          <Icon className="navBar-infoIcon">phone</Icon>
          <span id="navBar-phoneNumberText">{this.state.phone}</span>
        </a>
        <div id="navBar-address">
          <NavLink
            exact={true}
            to="/contactUs"
            className="navBar-locationLink"
            onClick={() => {
              window.setTimeout(() => {
                const map = document.getElementById("contact-map");
                if (map) {
                  window.scrollTo(0, map.offsetTop);
                }
              }, 50);
            }}
          >
            <Icon className="navBar-infoIcon">location_on</Icon>
            <span id="navBar-addressText">{this.state.address}</span>
          </NavLink>
        </div>
      </div>
    );
  }

  navLinks(showMobile: boolean, topLinks: boolean) {
    return (
      <ul
        className={`navBar-links ${
          showMobile ? "navBar-mobileLinksShown" : "navBar-mobileLinksHidden"
        }`}
        onClick={() =>
          this.setState({
            showTopMobileLinks: false,
            showStickyMobileLinks: false,
            showServicesSticky: false,
            showServicesTop: false
          })
        }
      >
        <li className="navBar-linkContainer">
          <NavLink
            exact={true}
            to="/"
            className="navBar-link"
            activeClassName="navBar-link-active"
            isActive={this.isActive.bind(this, "/")}
          >
            <span className="navBar-linkText">HOME</span>
          </NavLink>
        </li>
        <li className="navBar-linkContainer">
          <NavLink
            exact={true}
            to="/aboutUs"
            className="navBar-link"
            activeClassName="navBar-link-active"
            isActive={this.isActive.bind(this, "/aboutUs")}
          >
            <span className="navBar-linkText">ABOUT US</span>
          </NavLink>
        </li>
        <li className="navBar-linkContainer">
          <NavLink
            exact={true}
            to="/services"
            className="navBar-link"
            activeClassName="navBar-link-active"
            isActive={this.isActive.bind(this, "/services")}
          >
            <span className="navBar-linkText">SERVICES</span>
            <div
              className="navBar-expandServicesIconContainer"
              onClick={(e) => {
                this.stopClickPropagation(e);
                topLinks
                  ? this.setState({
                      showServicesTop: !this.state.showServicesTop
                    })
                  : this.setState({
                      showServicesSticky: !this.state.showServicesSticky
                    });
              }}
            >
              <Icon className="navBar-expandServicesIcon">
                {topLinks
                  ? this.state.showServicesTop
                    ? "expand_less"
                    : "expand_more"
                  : this.state.showServicesSticky
                  ? "expand_less"
                  : "expand_more"}
              </Icon>
            </div>
          </NavLink>

          <SlideDown
            className="navBar-servicesSlidedown"
            closed={
              topLinks
                ? !this.state.showServicesTop
                : !this.state.showServicesSticky
            }
            transitionOnAppear={true}
          >
            <ul
              id={`${
                topLinks
                  ? "navBar-serviceLinksTop"
                  : "navBar-serviceLinksSticky"
              }`}
              className="navBar-serviceLinks"
              onClick={() => {
                const serviceLinks = document.querySelector(
                  "#navBar-serviceLinksSticky"
                ) as HTMLElement;
                if (serviceLinks && !this.state.displayingStickyMobileMenu) {
                  serviceLinks.classList.add("navBar-serviceLinksHide");
                }
              }}
              onMouseLeave={() => {
                const serviceLinks = document.querySelector(
                  "#navBar-serviceLinksSticky"
                ) as HTMLElement;
                if (serviceLinks && !this.state.displayingStickyMobileMenu) {
                  serviceLinks.classList.remove("navBar-serviceLinksHide");
                }
              }}
            >
              <li className="navBar-sublistLinkContainer">
                <NavLink
                  exact={true}
                  to="/services/fuelOil"
                  className="navBar-sublistLink"
                  activeClassName="navBar-sublistLink-active"
                  isActive={this.isActive.bind(this, "/services/fuelOil")}
                >
                  <span className="navBar-linkText">FUEL OIL</span>
                </NavLink>
              </li>
              <li className="navBar-sublistLinkContainer">
                <NavLink
                  exact={true}
                  to="/services/installation"
                  className="navBar-sublistLink"
                  activeClassName="navBar-sublistLink-active"
                  isActive={this.isActive.bind(this, "/services/installation")}
                >
                  <span className="navBar-linkText">INSTALLATION</span>
                </NavLink>
              </li>
              <li className="navBar-sublistLinkContainer">
                <NavLink
                  exact={true}
                  to="/services/airConditioning"
                  className="navBar-sublistLink"
                  activeClassName="navBar-sublistLink-active"
                  isActive={this.isActive.bind(
                    this,
                    "/services/airConditioning"
                  )}
                >
                  <span className="navBar-linkText">AIR CONDITIONING</span>
                </NavLink>
              </li>
            </ul>
          </SlideDown>
        </li>
        <li className="navBar-linkContainer">
          <NavLink
            exact={true}
            to="/payment"
            className="navBar-link"
            activeClassName="navBar-link-active"
            isActive={this.isActive.bind(this, "/payment")}
          >
            <span className="navBar-linkText">PAYMENT</span>
          </NavLink>
        </li>
        <li className="navBar-linkContainer">
          <NavLink
            exact={true}
            to="/testimonials"
            className="navBar-link"
            activeClassName="navBar-link-active"
            isActive={this.isActive.bind(this, "/testimonials")}
          >
            <span className="navBar-linkText">TESTIMONIALS</span>
          </NavLink>
        </li>
        <li className="navBar-linkContainer">
          <NavLink
            exact={true}
            to="/contactUs"
            className="navBar-link"
            activeClassName="navBar-link-active"
            isActive={this.isActive.bind(this, "/contactUs")}
          >
            <span className="navBar-linkText">CONTACT US</span>
          </NavLink>
        </li>
      </ul>
    );
  }

  // Workaround for NavLink not showing as active after
  // following a direct link
  isActive = (path: any, match: any, location: any) => {
    return !!(
      match ||
      location.pathname === path ||
      (path !== "/" && location.pathname.search(path) !== -1)
    );
  };
}

export default NavBar;
