import "./ServicesPanel.scss";

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import airConditioning from "../../../Media/graphics/air-conditioning.png";
import oilTruck from "../../../Media/graphics/fuel-oil-truck.png";
import pipeWrench from "../../../Media/graphics/pipe-wrench.png";

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
          <img className="servicesPanel-icon" src={oilTruck} alt="fuel oil" />
          Fuel Oil
        </NavLink>
        <NavLink
          exact={true}
          to="services/pipe-wrench"
          className="servicesPanel-service"
        >
          <img
            className="servicesPanel-icon"
            src={pipeWrench}
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
            src={airConditioning}
            alt="air conditioning"
          />
          Air Conditioning
        </NavLink>
      </div>
    );
  }
}

export default ServicesPanel;
