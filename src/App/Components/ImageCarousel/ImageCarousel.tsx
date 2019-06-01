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
    locked: boolean;
    x0: number | null;
    y0: number | null;
    verticalOverride: boolean;
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
  backgroundDelay: number = 50;

  constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
      nextIndex: 1,
      inTransition: false,
      fading: false,
      locked: false,
      x0: 0,
      y0: 0,
      verticalOverride: false
    };

    this.carouselTimer = window.setInterval(
      () => this.nextSlide(),
      this.displayTime
    );
    this.fadeTimer = 0;
    this.backgroundTimer = 0;
  }

  componentWillUnmount() {
    clearInterval(this.carouselTimer);
    clearInterval(this.fadeTimer);
    clearInterval(this.backgroundTimer);
  }

  componentDidMount() {
    const control = document.querySelector("#carousel-image");
    if (control) {
      control.addEventListener("mousedown", this.lock.bind(this));
      control.addEventListener("touchstart", this.lock.bind(this));
      control.addEventListener("mouseup", this.move.bind(this));
      control.addEventListener("touchend", this.move.bind(this));
      control.addEventListener("touchmove", e => e.preventDefault());
      control.addEventListener("mousemove", this.drag.bind(this));
      control.addEventListener("touchmove", this.drag.bind(this));
    }
  }

  unify(e: any) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  drag(e: any) {
    e.preventDefault();

    if (this.state.locked && this.state.x0 !== null) {
      const dx = this.unify(e).clientX - this.state.x0;

      if (this.state.y0 !== null && Math.abs(dx) < 40) {
        const dy = this.unify(e).clientY - this.state.y0;

        if (Math.abs(dy) > 40 || this.state.verticalOverride) {
          this.setState({ y0: this.unify(e).clientY, verticalOverride: true });
          if (window) {
            window.scroll(0, Math.round(window.scrollY) - dy);
          }
        }
      }
    }
  }

  lock(e: any) {
    this.setState({ x0: this.unify(e).clientX, y0: this.unify(e).clientY });
    this.setState({ locked: true });
  }

  move(e: any) {
    this.setState({ verticalOverride: false });
    if (this.state.locked && this.state.x0 !== null) {
      const dx = this.unify(e).clientX - this.state.x0;
      const sign = Math.sign(dx);
      const dragPercentage = +((sign * dx) / window.innerWidth).toFixed(2);

      if (+dragPercentage > 0.1) {
        if (sign < 0) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }
      }
      this.setState({ x0: null, y0: null, locked: false });
    }
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
