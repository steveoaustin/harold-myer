import React, { Component } from "react";
import feedback from "../../../../Media/Images/Originals/testimonials.jpg";

import "./Testimonials.scss";
import Separator from "../../Separator/Separator";

const sanityClient = require("@sanity/client");

class Testimonials extends Component {
  state: {
    testimonials: [];
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = { testimonials: [] };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(`*[_type == "testimonialList"]{testimonials}[0]`)
      .then((result: any) => {
        this.setState({ testimonials: result.testimonials });
      });
  }

  render() {
    return (
      <div id="testimonials">
        <div
          id="testimonials-image"
          style={{ backgroundImage: `url(${feedback})` }}
        >
          <div id="testimonials-header">Testimonials</div>
        </div>
        <div id="testimonials-content">
          <div id="testimonials-title">What our customers think:</div>
          {this.state.testimonials.map((testimonial: any, i: number) => (
            <>
              <div key={i} className="testimonials-testimonial">
                <div className="testimonials-quote">
                  "{testimonial.testimonialQuote}"
                </div>
                <div className="testimonials-info">
                  -{testimonial.name}, {testimonial.location}
                </div>
              </div>
              {i !== this.state.testimonials.length - 1 && <Separator />}
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;
