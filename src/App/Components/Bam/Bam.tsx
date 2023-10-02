import "./Bam.scss";

import React from "react";

import bam from "../../../Media/graphics/BAM Digital Frost Logo.png";

class Bam extends React.Component {
  render() {
    return (
      <a href="https://bamdigital.io" className="bam">
        <img
          src={bam}
          alt={"BAM Digital Logo - I am the singularity"}
          className="bam-logo"
        />
      </a>
    );
  }
}

export default Bam;
