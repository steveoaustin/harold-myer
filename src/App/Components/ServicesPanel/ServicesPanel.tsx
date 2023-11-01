import "./ServicesPanel.scss";

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import fuelDroplet from "../../../Media/graphics/fuelDroplet.png";
import installation from "../../../Media/graphics/installation.png";
import snowflake from "../../../Media/graphics/snowflake.png";

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
          <img
            className="servicesPanel-icon"
            src={fuelDroplet}
            alt="fuel oil"
          />
          Fuel Oil
        </NavLink>
        <NavLink
          exact={true}
          to="services/installation"
          className="servicesPanel-service"
        >
          <img
            className="servicesPanel-icon"
            src={installation}
            alt="pipe-wrench"
          />
          Installation
        </NavLink>
        <NavLink
          exact={true}
          to="services/airConditioning"
          className="servicesPanel-service"
        >
          <img
            className="servicesPanel-icon"
            src={snowflake}
            alt="air conditioning"
          />
          Air Conditioning
        </NavLink>
      </div>
    );
  }
}

export default ServicesPanel;
