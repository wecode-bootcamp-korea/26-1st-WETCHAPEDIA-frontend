import React, { Component } from 'react';
import './SideElement.scss';

class SideElement extends Component {
  render() {
    return (
      <div className="sideInfo">
        <div className="advertise">
          <img src="/images/adimage.png" alt="adimage" className="adImage" />
          <div className="texts">
            <p className="firstText">국민건강보험 금연치료지원</p>
            <p className="secondText">금연치료지원 신청하고, 혜택받으세요!</p>
            <p>국민건강보험공단 AD</p>
          </div>
        </div>
        <div className="linkBox">
          <p className="title">감상 가능한 곳</p>
          <div className="platform">
            <img src="/images/netflix.png" className="icon" alt="netflix" />
            <span>넷플릭스</span>
          </div>
          <div className="platform">
            <img src="/images/wave.png" className="icon" alt="wave" />
            <span>웨이브</span>
          </div>
          <div className="platform">
            <img src="/images/tving.png" className="icon" alt="netflix" />
            <span>Tving</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideElement;
