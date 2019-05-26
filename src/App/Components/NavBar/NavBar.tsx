import React, { Component } from "react";
import facebook from "../../../Media/graphics/facebook.png";
import { NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import { Icon } from "@material-ui/core";
import logo from "../../../Media/Images/TestImages/flame.png";

import "./NavBar.scss";

const sanityClient = require("@sanity/client");

class NavBar extends Component {
  state: {
    phone: string;
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
          address: result.address,
          facebook: result.facebookLink
        });
      });
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("scroll", e => this.checkScrollPosition());
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
      if (headerBarHeight - position < 0) {
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
              <span id="navBar-companyName">Harold Myers Inc.</span>
              <div
                id="navBar-topNavMobileMenu"
                className="navBar-mobileNavMenu"
                onClick={e => {
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
              transitionOnAppear={false}
            >
              {this.navLinks(this.state.showTopMobileLinks, true)}
            </SlideDown>
          </div>
        </div>
        <div
          id="navBar-stickyNavigation"
          className={
            this.state.showStickyNavBar
              ? "navBar-stickyNavigationShown"
              : "navBar-stickyNavigationHidden"
          }
        >
          <NavLink exact={true} to="/" id="navBar-logoHomeLinkSticky">
            <img
              id="navBar-companyLogoSticky"
              src={logo}
              alt="Harold Myers Logo"
            />
            <span id="navBar-companyNameSticky">Harold Myers Inc.</span>
            <div
              id="navBar-stickyNavMobileMenu"
              className="navBar-mobileNavMenu"
              onClick={() =>
                this.setState({
                  showStickyMobileLinks: !this.state.showStickyMobileLinks
                })
              }
            >
              <Icon className="navBar-mobileLinksMenu">menu</Icon>
            </div>
          </NavLink>
          <SlideDown
            className="navBar-linkSlidedown"
            closed={
              this.state.displayingStickyMobileMenu === undefined ||
              (this.state.displayingStickyMobileMenu &&
                !this.state.showStickyMobileLinks)
            }
            transitionOnAppear={false}
          >
            {this.navLinks(this.state.showStickyMobileLinks, false)}
          </SlideDown>
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
        <div id="navBar-phoneNumber">{this.state.phone}</div>
        <div id="navBar-address">{this.state.address}</div>
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
              onClick={e => {
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
            transitionOnAppear={false}
          >
            <ul className="navBar-serviceLinks">
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
