import React, { Component } from "react";

import "./Home.scss";
import ServicesPanel from "../../ServicesPanel/ServicesPanel";
import { Icon } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div id="home-image">
          <div id="home-header">
            Delivering high quality fuel at affordable prices
          </div>
        </div>
        <div id="home-serviceListContainer">
          <div id="home-serviceListHeading">
            We proudly offer the following services:
          </div>
          <div id="home-serviceList">
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Fuel Oil
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Automatic
              Delivery
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Service
              Contracts
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>
              Installation
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>On and Off
              Road Diesel
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Air
              Conditioning
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Electric
              Water Heaters
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Prepay
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Budget
              Plans
            </div>
            <div className="home-service">
              <Icon className="home-serviceIcon">chevron_right</Icon>Cap Price
              Program
            </div>
            <div id="home-serviceLong" className="home-service">
              <span id="home-serviceLongItem">
                <Icon className="home-serviceIcon">chevron_right</Icon>
                24 Hour Emergency Heater Service
              </span>
            </div>
          </div>
        </div>
        <ServicesPanel />
      </div>
    );
  }
}

export default Home;
