import React, { Component } from 'react';
import './CarouselSlide.scss';

function getTarget(elem, className) {
  while (!elem.classList.contains(className)) {
    elem = elem.parentNode;

    if (elem.nodeName === 'BODY') {
      elem = null;
      return;
    }
  }
  return elem;
}

class CarouselSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTranslatePosX: 0,
      curLastPosX: 1,
    };
    this.carouselSildeRef = null;
  }

  moveToX = event => {
    let eventType = event.type;

    let { curLastPosX } = this.state;
    let { slideWidth, slideMove } = this.props;

    let totalScrollLength = event.target.scrollWidth;
    curLastPosX = totalScrollLength - slideWidth;

    this.setState({ curLastPosX });

    if (eventType === 'click') {
      let { curTranslatePosX } = this.state;
      let { name } = getTarget(event.target, 'carouselControl');

      if (name === 'right') {
        this.carouselSildeRef.scrollLeft = curTranslatePosX + slideMove;
        this.setState({
          curTranslatePosX: curTranslatePosX + slideMove,
        });
      } else {
        this.carouselSildeRef.scrollLeft = curTranslatePosX - slideMove;
        this.setState({
          curTranslatePosX: curTranslatePosX - slideMove,
        });
      }
    } else {
      let curScrollLeftPos = event.target.scrollLeft;
      this.setState({ curTranslatePosX: curScrollLeftPos });
    }
  };

  render() {
    let { curTranslatePosX, curLastPosX } = this.state;
    let { slideWidth } = this.props;

    let { children } = this.props;

    return (
      <div className="carouselSliderContainer">
        <div
          ref={ref => (this.carouselSildeRef = ref)}
          className="feedsCarousel"
          onScroll={this.moveToX}
          style={{ width: { slideWidth } }}
        >
          <ul className="carouselSlider">{children}</ul>
        </div>
        <button
          onClick={this.moveToX}
          name="right"
          className={`carouselControl nextBtn ${
            parseInt(curTranslatePosX) === curLastPosX
              ? 'unactiveBtn'
              : 'activeBtn'
          }`}
        >
          <div className="btnImg right" />
        </button>
        <button
          onClick={this.moveToX}
          name="left"
          className={`carouselControl prevBtn ${
            curTranslatePosX === 0 ? 'unactiveBtn' : 'activeBtn'
          }`}
        >
          <div className="btnImg left" />
        </button>
      </div>
    );
  }
}

export default CarouselSlide;
