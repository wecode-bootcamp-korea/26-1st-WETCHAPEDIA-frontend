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
      curScrollLeftPos: 0,
    };
  }

  moveToX = event => {
    let eventType = event.type;

    if (eventType === 'click') {
      let { curTranslateX } = this.state;
      let { name } = getTarget(event.target, 'carouselControl');

      name === 'right'
        ? this.setState({ curTranslateX: curTranslateX - 50 })
        : this.setState({ curTranslateX: curTranslateX + 50 });
    } else {
      let curScrollLeftPos = event.target.scrollLeft;
      this.setState({ curScrollLeftPos });
    }
  };

  render() {
    let { curTranslateX, curScrollLeftPos } = this.state;
    let { children } = this.props;

    return (
      <>
        <div className="feedsCarousel" onScroll={this.moveToX}>
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
            curTranslateX && curScrollLeftPos
              ? 'unactiveLeftBtn'
              : 'activeLeftBtn'
          }`}
        >
          <div className="leftBtnImg" />
        </button>
      </>
    );
  }
}

export default CarouselSlide;
