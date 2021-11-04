import React, { Component } from 'react';

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
      curTranslateX: 0,
      isOverflow: false,
    };
  }

  carouselLeaveMouse = event => {
    this.setState({
      isOverflow: false,
    });
  };

  carouselOverMouse = event => {
    this.setState({
      isOverflow: true,
    });
  };

  moveToX = event => {
    let { curTranslateX } = this.state;
    let { name } = getTarget(event.target, 'carouselControl');

    name === 'right'
      ? this.setState({ curTranslateX: curTranslateX - 50 })
      : this.setState({ curTranslateX: curTranslateX + 50 });
  };

  render() {
    let { curTranslateX, isOverflow } = this.state;
    let { children } = this.props;

    return (
      <>
        <div
          onMouseOver={this.carouselOverMouse}
          onMouseLeave={this.carouselLeaveMouse}
          className="feedsCarousel"
          style={isOverflow ? { overflow: 'auto' } : { overflow: 'hidden' }}
        >
          <ul
            className="carouselSlider"
            style={{ transform: `translateX(${curTranslateX}%)` }}
          >
            {children}
          </ul>
        </div>
        <button
          onClick={this.moveToX}
          name="right"
          className="carouselControl nextBtn"
        >
          <div className="rightBtnImg" />
        </button>
        <button
          onClick={this.moveToX}
          name="left"
          className={`carouselControl prevBtn ${
            curTranslateX === 0 ? 'unactiveLeftBtn' : 'activeLeftBtn'
          }`}
        >
          <div className="leftBtnImg" />
        </button>
      </>
    );
  }
}

export default CarouselSlide;
