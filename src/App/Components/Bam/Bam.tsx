import './Bam.scss';

import React from 'react';

import bam from '../../../Media/Images/Compressed/bam.png';

class Bam extends React.Component {
  render() {
    return (
      <div className="bam">
        <a href="https://bamheroes.com" className="bam-container">
          <div className="bam-text">Built By</div>
          <img
            src={bam}
            alt={"bam websites logos marketing"}
            className="bam-logo"
          />
        </a>
      </div>
    );
  }
}

export default Bam;
