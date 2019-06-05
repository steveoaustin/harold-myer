import React, { Component } from "react";
import install from "../../../../../Media/Images/Compressed/installation.jpg";

import "./Installation.scss";
import Separator from "../../../Separator/Separator";
import Helmet from "react-helmet";

class Installation extends Component {
  render() {
    return (
      <div id="installation">
        <Helmet>
          <title>Installation</title>
          <meta
            name="description"
            content="We install heating and cooling appliances for your home"
          />
        </Helmet>
        <div
          id="installation-image"
          style={{ backgroundImage: `url(${install})` }}
        >
          <div id="installation-header">Installation</div>
        </div>
        <div id="installation-about">
          Heater and Air Conditioning installations are our specialty! Over
          eighty years of experience has proven that we have the knowledge to
          design and install your next high efficiency heating or air
          conditioning system.
        </div>

        <Separator />

        <div id="installation-mapOverview">
          This is our general service area.
          {
            <>
              <br />
              <br />
            </>
          }
          Please contact us if you are close by to see if we can accomodate your
          needs.
          <div className="towns-hidden" style={{ display: "none" }}>
            Bedminster Buckingham Carversville Chalfont Doylestown Dublin
            Furlong Hatfield Hilltown Horsham Ivyland Jamison Kitnersville New
            Britain New Hope Ottsville Perkasie Pipersville Plumsteadville Point
            Pleasant Quakertown Richlandtown Riegelsville Richboro Sellersville
            Solebury Souderton Southampton Telford Warminster Warrington
            Wrightstown Wycombe
          </div>
        </div>
        <div id="installation-mapContainer">
          <iframe
            id="installation-map"
            title="installation-map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZqhUVEMbee0Oz7Dj0jUIdUcA0hCu9ffq"
          />
        </div>
      </div>
    );
  }
}

export default Installation;
