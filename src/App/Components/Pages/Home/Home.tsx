import React, { Component } from "react";
import ServicesPanel from "../../ServicesPanel/ServicesPanel";
import { Icon } from "@material-ui/core";
import home from "../../../../Media/Images/Compressed/home.jpg";

import "./Home.scss";
import Helmet from "react-helmet";

const sanityClient = require("@sanity/client");

class Home extends Component {
  state: {
    fuelList: {
      fuelType: string;
      fuelPrice: string | null;
      fuelInfo: string | null;
    }[];
    asOfDate: string;
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = { fuelList: [], asOfDate: "" };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(
        `*[_type == "fuelList"]{currentOptions[]{fuelName, fuelPrice, fuelInfo}, asOfDate}[0]`
      )
      .then((result: any) => {
        const list: {
          fuelType: string;
          fuelPrice: string | null;
          fuelInfo: string | null;
        }[] = [];
        result.currentOptions.map((fuel: any) => {
          list.push({
            fuelType: fuel.fuelName,
            fuelPrice: fuel.fuelPrice,
            fuelInfo: fuel.fuelInfo
          });
          return null;
        });
        this.setState({ fuelList: list, asOfDate: result.asOfDate });
      });
  }

  render() {
    return (
      <div id="home">
        <Helmet>
          <title>
            Harold Myers Inc. Fuel Oil, Air Condition, Installation, 24 Hour
            Service
          </title>
          <meta
            name="description"
            content="Harold Myers Fuel: offering fuel oil delivery, air conditioning and water heater installation, and 24 hour emergency service to the Bucks County area."
          />
        </Helmet>
        <div id="home-headerMobile">
          Your affordable full service oil company
        </div>

        <div id="home-image" style={{ backgroundImage: `url(${home})` }}>
          <div id="home-header">Your affordable full service oil company</div>
        </div>
        <div id="home-fuelContainer">
          <div id="home-fuelList">
            {this.state.fuelList.map(
              (fuel: any, i: number) =>
                (fuel.fuelPrice || fuel.fuelInfo) && (
                  <div className="home-fuel" key={i}>
                    <div className="home-fuelName">{fuel.fuelType}</div>
                    {fuel.fuelPrice && (
                      <div className="home-fuelPrice">{fuel.fuelPrice}</div>
                    )}
                    {fuel.fuelInfo && (
                      <div className="home-fuelInfo">{fuel.fuelInfo} </div>
                    )}
                  </div>
                )
            )}
          </div>
          <div id="home-fuelDate">
            Prices are up to date as of{" "}
            <span style={{ whiteSpace: "nowrap" }}>{this.state.asOfDate}</span>
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
              <Icon className="home-serviceIcon">chevron_right</Icon>On and
              Off-Road Diesel
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
