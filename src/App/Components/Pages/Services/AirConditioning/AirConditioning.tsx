import "./AirConditioning.scss";

import React, { Component } from "react";
import Helmet from "react-helmet";

import air from "../../../../../Media/Images/Compressed/airConditioning.jpg";
import Separator from "../../../Separator/Separator";

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
          <div className="services-towns">
            <div className="services-town">Bedminster</div>
            <div className="services-town">Buckingham</div>
            <div className="services-town">Carversville</div>
            <div className="services-town">Chalfont</div>
            <div className="services-town">Doylestown</div>
            <div className="services-town">Dublin</div>
            <div className="services-town">Furlong</div>
            <div className="services-town">Hatfield</div>
            <div className="services-town">Hilltown</div>
            <div className="services-town">Horsham</div>
            <div className="services-town">Ivyland</div>
            <div className="services-town">Jamison</div>
            <div className="services-town">Kitnersville</div>
            <div className="services-town">New Britain</div>
            <div className="services-town">New Hope</div>
            <div className="services-town">Newton</div>
            <div className="services-town">Ottsville</div>
            <div className="services-town">Perkasie</div>
            <div className="services-town">Pipersville</div>
            <div className="services-town">Plumsteadville</div>
            <div className="services-town">Point Pleasant</div>
            <div className="services-town">Quakertown</div>
            <div className="services-town">Richboro</div>
            <div className="services-town">Richlandtown</div>
            <div className="services-town">Riegelsville</div>
            <div className="services-town">Sellersville</div>
            <div className="services-town">Solebury</div>
            <div className="services-town">Souderton</div>
            <div className="services-town">Southampton</div>
            <div className="services-town">Telford</div>
            <div className="services-town">Warminster</div>
            <div className="services-town">Warrington</div>
            <div className="services-town">Wrightstown</div>
            <div className="services-town">Wycombe</div>
          </div>
        </div>
        <div id="airConditioning-mapContainer">
          <iframe
            id="airConditioning-map"
            title="airConditioning-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.839851768723!2d-75.14525708460492!3d40.39024187936805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4035a1dac07c3%3A0xda76e3444a86acb0!2sHarold+Myers+Fuel!5e0!3m2!1sen!2sus!4v1559159232705!5m2!1sen!2sus"
          />
        </div>
      </div>
    );
  }
}

export default AirConditioning;
