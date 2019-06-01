import React, { Component } from "react";

import "./Installation.scss";

class Installation extends Component {
  render() {
    return (
      <div id="installation">
        <div id="installation-image">
          <div id="installation-header">Installation</div>
        </div>
        <div id="installation-about">
          Heater and Air Conditioning installations are our specialty! Over
          eighty years of experience has proven that we have the knowledge to
          design and install your next high efficiency heating or air
          conditioning system.
        </div>
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
