import React, { Component } from "react";

import "./AboutUs.scss";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

class AboutUs extends Component {
  render() {
    return (
      <div id="about-container">
        <ImageCarousel />
        <div id="about-textContainer">
          <div id="about-title">About Our Business</div>
          <div id="about-text">
            Harold Myers, Inc. has been family owned and operated since 1939. We
            have learned a lot over these years, allowing us to provide you the
            quality service you deserve. Our customers are always our top
            priority; we will always put your needs first.
            {
              <>
                <br />
                <br />
              </>
            }
            We'll be here to keep you warm in the winter and cool in the summer,
            all while providing 24-hour emergency service!
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
