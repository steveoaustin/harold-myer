import React, { Component } from "react";
import { Icon } from "@material-ui/core";
import chevy from "../../../Media/Images/Compressed/chevyColor.jpg";
import coal from "../../../Media/Images/Compressed/coalTrailer.jpg";
import tanker from "../../../Media/Images/Compressed/tanker.jpg";
import tankerGray from "../../../Media/Images/Compressed/tankerGray.jpg";

import "./ImageCarousel.scss";

class ImageCarousel extends Component {
  state: {
    index: number;
    nextIndex: number;
    inTransition: boolean;
    fading: boolean;
  };
  images: string[] = [tanker, coal, tankerGray, chevy];
  imageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  carouselTimer: number;
  fadeTimer: number;
  backgroundTimer: number;
  fadeTime: number = 1000;
  displayTime: number = 4000;
  backgroundDelay: number = 100;

  constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
      nextIndex: 1,
      inTransition: false,
      fading: false
    };

    this.carouselTimer = window.setInterval(
      () => this.nextSlide(),
      this.displayTime
    );
    this.fadeTimer = 0;
    this.backgroundTimer = 0;
  }

  nextSlide() {
    if (this.state.inTransition) return;

    const newIndex =
      this.state.index === this.images.length - 1 ? 0 : this.state.index + 1;
    const nextIndex = newIndex === this.images.length - 1 ? 0 : newIndex + 1;

    clearInterval(this.carouselTimer);
    clearInterval(this.fadeTimer);
    clearInterval(this.backgroundTimer);

    this.setState({ fading: true, inTransition: true }, () => {
      this.fadeTimer = window.setTimeout(() => {
        this.setState({ fading: false, index: newIndex });
        this.backgroundTimer = window.setTimeout(() => {
          this.setState({ nextIndex: nextIndex, inTransition: false });
        }, this.backgroundDelay);
        this.carouselTimer = window.setInterval(
          () => this.nextSlide(),
          this.displayTime
        );
      }, this.fadeTime);
    });
  }

  previousSlide() {
    if (this.state.inTransition) return;

    const newIndex =
      this.state.index === 0 ? this.images.length - 1 : this.state.index - 1;
    const nextIndex = newIndex === this.images.length - 1 ? 0 : newIndex + 1;

    clearInterval(this.carouselTimer);
    clearInterval(this.fadeTimer);
    clearInterval(this.backgroundTimer);

    this.setState({ nextIndex: newIndex, inTransition: true }, () => {
      this.setState({ fading: true, inTransition: true }, () => {
        this.fadeTimer = window.setTimeout(() => {
          this.setState({ fading: false, index: newIndex });
          this.backgroundTimer = window.setTimeout(() => {
            this.setState({ nextIndex: nextIndex, inTransition: false });
          }, this.backgroundDelay);
          this.carouselTimer = window.setInterval(
            () => this.nextSlide(),
            this.displayTime
          );
        }, this.fadeTime);
      });
    });
  }

  render() {
    return (
      <div
        id="carousel-container"
        style={{
          ...this.imageStyle,
          backgroundImage: `url(${this.images[this.state.nextIndex]})`
        }}
      >
        <div
          id="carousel-image"
          className={this.state.fading ? "carousel-imageFade" : undefined}
          style={{
            ...this.imageStyle,
            backgroundImage: `url(${this.images[this.state.index]})`
          }}
        />
        <div
          id="carousel-arrowLeft"
          className="carousel-arrow"
          onClick={() => this.previousSlide()}
        >
          <Icon>arrow_back</Icon>
        </div>
        <div
          id="carousel-arrowRight"
          className="carousel-arrow"
          onClick={() => this.nextSlide()}
        >
          <Icon>arrow_forward</Icon>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
