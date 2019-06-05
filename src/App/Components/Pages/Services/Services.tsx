import React, { Component } from "react";
import services from "../../../../Media/Images/Compressed/services.jpg";

import "./Services.scss";
import ServicesPanel from "../../ServicesPanel/ServicesPanel";
import Helmet from "react-helmet";

class Services extends Component {
  render() {
    return (
      <div id="services">
        <Helmet>
          <title>Our Services</title>
          <meta
            name="description"
            content="We deliver heating oil and other types of fuel, and offer installation for heating appliances air conditioners "
          />
        </Helmet>
        <div
          id="services-image"
          style={{ backgroundImage: `url(${services})` }}
        >
          <div id="services-header">Our Services</div>
        </div>
        <div id="services-overview">
          Harold Myers, Inc. provides 24-hour emergency heater service to all of
          our fuel oil customers. We also repair air conditioners. Our full time
          highly skilled technicians provide all of our service work. Our trucks
          and warehouse are stocked with a complete line of parts to fix all
          makes and models of oil fired heating equipment. Harold Myers, Inc.
          does heater and air conditioner installations too.
          {
            <>
              <br />
              <br />
            </>
          }
          We are here to meet all of your home comfort needs!
        </div>
        <ServicesPanel />
        <div id="services-mapOverview">
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
        <div id="services-mapContainer">
          <iframe
            id="services-map"
            title="services-map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZqhUVEMbee0Oz7Dj0jUIdUcA0hCu9ffq"
          />
        </div>
      </div>
    );
  }
}

export default Services;
