import "./Home.scss";

import React, { Component } from "react";
import Helmet from "react-helmet";

import { Icon } from "@material-ui/core";

import home from "../../../../Media/Images/Compressed/home.jpg";
import ServicesPanel from "../../ServicesPanel/ServicesPanel";

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

  americanizeDate(): string {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
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
        <div id="home-image" style={{ backgroundImage: `url(${home})` }}>
          <div className="home-header">
            Your Affordable Full-Service Oil Company
          </div>
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
            Prices are up to date as of {this.americanizeDate()}
          </div>
        </div>

        <div id="home-serviceListContainer">
          <div id="home-serviceListHeading">
            We proudly offer the following services:
          </div>
          <div id="home-serviceList">
            <a className="home-service">Fuel Oil</a>
            <a className="home-service">Automatic Delivery</a>
            <a className="home-service">Service Contracts</a>
            <a className="home-service">Installation</a>
            <a className="home-service">On and Off-Road Diesel</a>
            <a className="home-service">Air Conditioning</a>
            <a className="home-service">Electric Water Heaters</a>
            <a className="home-service">Prepay</a>
            <a className="home-service">Budget Plans</a>
            <a className="home-service">Cap Price Program</a>
            <a id="home-serviceLong" className="home-service">
              <span id="home-serviceLongItem">
                24 Hour Emergency Heater Service
              </span>
            </a>
          </div>
        </div>
        <ServicesPanel />
      </div>
    );
  }
}

export default Home;
