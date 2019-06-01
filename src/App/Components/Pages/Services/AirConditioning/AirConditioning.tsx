import React, { Component } from "react";

import "./AirConditioning.scss";

class AirConditioning extends Component {
  render() {
    return (
      <div id="airConditioning">
        <div id="airConditioning-image">
          <div id="airConditioning-header">Air Conditioning</div>
        </div>
        <div id="airConditioning-about">
          Don't let the heat of summer get you down! We offer complete air
          conditioning service and installations. All of our technicians have
          all of the training and experience needed to install a quality, high
          efficiency air conditioning system.
        </div>

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
