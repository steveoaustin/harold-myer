import './Separator.scss';

import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Separator extends Component {
  state: { rendered: boolean };

  constructor(props: any) {
    super(props);
    this.state = { rendered: false };
  }
  render() {
    return (
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animateOnce={false}
        offset={100}
        duration={0}
        afterAnimatedIn={() => {
          this.setState({ rendered: true });
          return {};
        }}
        afterAnimatedOut={() => {
          this.setState({ rendered: false });
          return {};
        }}
        className="separator"
      >
        <div id="separatorContainer">
          <div
            id="separatorLine"
            className={`${
              this.state.rendered ? "separatorLineGrown" : undefined
            }`}
          />
        </div>
      </ScrollAnimation>
    );
  }
}

export default Separator;
