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

class Feed extends Component {
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
    let { feeds } = this.props;

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
            {feeds.map(({ id, movieTitle, movieTear }) => {
              return (
                <li key={id} className="feed">
                  <figure className="moviePoster" />
                  <div className="movieInfo">
                    <p className="Title">{movieTitle}</p>
                    <p className="Tear">{movieTear}</p>
                  </div>
                </li>
              );
            })}
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

export default Feed;
