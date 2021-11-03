import React, { Component } from 'react';
import '../../styles/common.scss';
import '../Footer/Footer.scss';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="topBanner">
          <span>
            지금까지 <em>★ 635,684,311 개의 평가가</em> 쌓였어요.
          </span>
        </div>
        <div className="footerMain">
          <section className="leftFooter">
            <ul className="ftFirstList">
              <li>서비스 이용약관</li>
              <li>개인정보 처리방침</li>
              <li>회사 안내</li>
            </ul>
            <ul className="ftSecondList">
              <li>고객센터</li>
              <li>loveadsadf1976@gmail.com</li>
            </ul>
            <ul className="ftSecondList">
              <li>광고 문의</li>
              <li>loveadsadf1976@gmail.com</li>
            </ul>
            <ul className="ftSecondList">
              <li>제휴 및 대외 협력</li>
              <li>loveadsadf1976@gmail.com</li>
            </ul>
            <ul className="ftThirdList">
              <li>주식회사 위챠챠</li>
              <li>대표 안재우</li>
              <li>대표 전창민</li>
              <li>대표 정지후</li>
              <li>대표 최병현</li>
            </ul>
            <ul className="ftThirdList">
              <li>주식회사 위챠챠</li>
              <li>대표 박민정</li>
              <li>대표 박대현</li>
              <li>대표 장재원</li>
            </ul>
            <ul className="ftThirdList">
              <li>WETCHA PEDIA</li>
              <li>© 2021 by WECHACHA, Inc. All rights reserved.</li>
            </ul>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
