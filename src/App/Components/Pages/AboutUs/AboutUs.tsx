import React, { Component } from "react";

import "./AboutUs.scss";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

class AboutUs extends Component {
  render() {
    return (
      <div id="about-container">
        <ImageCarousel />
      </div>
    );
  }
}

export default AboutUs;
