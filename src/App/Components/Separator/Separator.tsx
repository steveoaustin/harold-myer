import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./Separator.scss";

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
        afterAnimatedIn={() => this.setState({ rendered: true })}
        afterAnimatedOut={() => this.setState({ rendered: false })}
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
