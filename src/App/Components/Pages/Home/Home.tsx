import "./Home.scss";

import React, { Component } from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";

import home from "../../../../Media/Images/Compressed/home-optimized.jpg";
import ServicesPanel from "../../ServicesPanel/ServicesPanel";

const sanityClient = require("@sanity/client");

class Home extends Component {
  state: {
    fuelList: {
      fuelType: string;
      fuelPrice: string | null;
      fuelInfo: string | null;
    }[];
    fuelInfoText: string;
    asOfDate: string;
    serviceContract: any;
    prepayFile: any;
    showPrepay?: boolean;
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = {
      fuelList: [],
      asOfDate: "",
      fuelInfoText: "",
      serviceContract: "",
      prepayFile: ""
    };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(
        `*[_type == "fuelList"]{currentOptions[]{fuelName, fuelPrice, fuelInfo}, fuelInfoText}[0]`
      )
      .then((result: any) => {
        const list: {
          fuelType: string;
          fuelPrice: string | null;
          fuelInfo: string | null;
        }[] = [];
        result.currentOptions.map((fuel: any) => {
          // hide prepay link when not in fuel list
          if (fuel.fuelName.toLowerCase().includes("prepay")) {
            this.setState({ showPrepay: true });
          }
          list.push({
            fuelType: fuel.fuelName,
            fuelPrice: fuel.fuelPrice,
            fuelInfo: fuel.fuelInfo
          });
          return null;
        });
        this.setState({ fuelList: list, fuelInfoText: result.fuelInfoText });
      });
    this.client
      .fetch(
        `*[_type == "serviceContract"]{"fileUrl" : contract.asset->url}[0]`
      )
      .then((result: any) => {
        this.setState({ serviceContract: result.fileUrl });
      });
    this.client
      .fetch(`*[_type == "prepayForm"]{"fileUrl" : form.asset->url}[0]`)
      .then((result: any) => {
        this.setState({ prepayFile: result.fileUrl });
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
          {this.state.fuelInfoText && (
            <div id="home-fuelInfo">{this.state.fuelInfoText}</div>
          )}
          <div id="home-fuelDate">
            Prices are up to date as of {this.americanizeDate()}
          </div>
        </div>

        <div id="home-serviceListContainer">
          <div id="home-serviceListHeading">
            We proudly offer the following services:
          </div>
          <div id="home-serviceList">
            <NavLink exact to="/services/fuelOil" className="home-service">
              Fuel Oil
            </NavLink>
            <NavLink exact to="/services/fuelOil" className="home-service">
              Automatic Delivery
            </NavLink>
            <a
              href={this.state.serviceContract}
              download="Service_Contract"
              target="_blank"
              rel="noopener noreferrer"
              className="home-service"
            >
              Service Contracts
            </a>
            <NavLink exact to="/services/installation" className="home-service">
              Installation
            </NavLink>
            <NavLink exact to="/services/fuelOil" className="home-service">
              On and Off-Road Diesel
            </NavLink>
            <NavLink
              exact
              to="/services/airConditioning"
              className="home-service"
            >
              Air Conditioning
            </NavLink>
            <NavLink exact to="/services/installation" className="home-service">
              Electric Water Heaters
            </NavLink>
            {this.state.showPrepay ? (
              <a
                href={this.state.prepayFile}
                download="Prepay_Form"
                target="_blank"
                rel="noopener noreferrer"
                className="home-service"
              >
                Prepay
              </a>
            ) : (
              <NavLink exact to="/payment" className="home-service">
                Prepay
              </NavLink>
            )}
            <NavLink exact to="/payment" className="home-service">
              Budget Plans
            </NavLink>
            <NavLink exact to="/payment" className="home-service">
              Cap Price Program
            </NavLink>
            <NavLink
              exact
              to="/services/"
              id="home-serviceLong"
              className="home-service"
            >
              <span id="home-serviceLongItem">
                24 Hour Emergency Heater Service
              </span>
            </NavLink>
          </div>
        </div>
        <ServicesPanel />
      </div>
    );
  }
}

export default Home;
