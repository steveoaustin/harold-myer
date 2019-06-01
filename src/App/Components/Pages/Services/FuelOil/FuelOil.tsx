import React, { Component } from "react";

import "./FuelOil.scss";

class FuelOil extends Component {
  render() {
    return (
      <div id="fuelOil">
        <div id="fuelOil-image">
          <div id="fuelOil-header">Fuel Oil</div>
        </div>
        <div id="fuelOil-about">
          Our brand new 90,000 gallon, state of the art, DEP approved fuel oil
          storage terminal allows us to purchase large quantities of oil when
          the prices are low and pass the savings on to our customers. This also
          enables us to have fuel oil on hand and ready to be delivered even in
          the worst weather conditions.
        </div>

        <div id="fuelOil-mapOverview">
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
        <div id="fuelOil-mapContainer">
          <iframe
            id="fuelOil-map"
            title="fuelOil-map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZqhUVEMbee0Oz7Dj0jUIdUcA0hCu9ffq"
          />
        </div>
      </div>
    );
  }
}

export default FuelOil;
