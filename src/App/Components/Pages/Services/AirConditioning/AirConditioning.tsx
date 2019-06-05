import React, { Component } from "react";
import air from "../../../../../Media/Images/Compressed/airConditioning.jpg";

import "./AirConditioning.scss";
import Separator from "../../../Separator/Separator";
import Helmet from "react-helmet";

class AirConditioning extends Component {
  render() {
    return (
      <div id="airConditioning">
        <Helmet>
          <title>Air Conditioning</title>
          <meta
            name="description"
            content="We can install or service air conditioners to keep your home cool"
          />
        </Helmet>

        <div
          id="airConditioning-image"
          style={{ backgroundImage: `url(${air})` }}
        >
          <div id="airConditioning-header">Air Conditioning</div>
        </div>
        <div id="airConditioning-about">
          Don't let the heat of summer get you down! We offer complete air
          conditioning service and installations. All of our technicians have
          all of the training and experience needed to install a quality, high
          efficiency air conditioning system.
        </div>

        <Separator />

        <div id="airConditioning-mapOverview">
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
        <div id="airConditioning-mapContainer">
          <iframe
            id="airConditioning-map"
            title="airConditioning-map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZqhUVEMbee0Oz7Dj0jUIdUcA0hCu9ffq"
          />
        </div>
      </div>
    );
  }
}

export default AirConditioning;
