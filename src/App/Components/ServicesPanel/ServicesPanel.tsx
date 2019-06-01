import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import fuelDroplet from "../../../Media/graphics/fuelDroplet.svg";
import snowflake from "../../../Media/graphics/snowflake.svg";
import installation from "../../../Media/graphics/installation.svg";

import "./ServicesPanel.scss";

class ServicesPanel extends Component {
  render() {
    return (
      <div id="servicesPanel">
        <div id="servicesPanel-title">Learn More</div>
        <NavLink
          exact={true}
          to="services/fuelOil"
          className="servicesPanel-service"
        >
          <div
            id="servicesPanel-fuelOil"
            className="servicesPanel-serviceContent"
          >
            <div className="servicesPanel-iconContainer">
              <div className="servicesPanel-iconBackground">
                <img
                  className="servicesPanel-icon"
                  src={fuelDroplet}
                  alt="fuel oil"
                />
              </div>
            </div>
            Fuel Oil
          </div>
        </NavLink>
        <NavLink
          exact={true}
          to="services/installation"
          className="servicesPanel-service"
        >
          <div
            id="servicesPanel-installation"
            className="servicesPanel-serviceContent"
          >
            <div className="servicesPanel-iconContainer">
              <div className="servicesPanel-iconBackground">
                <img
                  className="servicesPanel-icon"
                  src={installation}
                  alt="installation"
                />
              </div>
            </div>
            Installation
          </div>
        </NavLink>
        <NavLink
          exact={true}
          to="services/airConditioning"
          className="servicesPanel-service"
        >
          <div
            id="servicesPanel-airConditioning"
            className="servicesPanel-serviceContent"
          >
            <div className="servicesPanel-iconContainer">
              <div className="servicesPanel-iconBackground">
                <img
                  className="servicesPanel-icon"
                  src={snowflake}
                  alt="air conditioning"
                />
              </div>
            </div>
            Air Conditioning
          </div>
        </NavLink>
      </div>
    );
  }
}

export default ServicesPanel;
