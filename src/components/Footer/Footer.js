import React, { Component } from 'react';
import { EMAILINFO, INFO } from './footerData';
import '../Footer/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="topBanner">
          <span>
            지금까지 <em>★ 635,684,311 개의 평가가</em> 쌓였어요.
          </span>
        </div>
        <div className="footerMain">
          <section className="leftFooter">
            <ul className="firstList">
              <li>서비스 이용약관</li>
              <li>개인정보 처리방침</li>
              <li>회사 안내</li>
            </ul>
            <ul className="secondList">
              {EMAILINFO.map(email => {
                return (
                  <li className="emailList" key={email.id}>
                    {email.content}
                  </li>
                );
              })}
            </ul>
            <ul className="thirdList">
              {INFO.map(member => {
                return (
                  <li className="memberList" key={member.id}>
                    {member.content}
                  </li>
                );
              })}
            </ul>
            <ul className="ftInfo">
              <span>
                WETCHA PEDIA &nbsp;© 2021 by WECHACHA, Inc. All rights reserved.
              </span>
            </ul>
          </section>
          <section className="rightFooter">
            <button className="list">한국어</button>
            <div className="footerSns">
              <img
                src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494464.png?token=exp=1636529686~hmac=4d6f8cbcf0f9fb2755c1e9eb6bf1f2b1"
                alt="facebookicon"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"
                alt="twitericon"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/625/625150.png"
                alt="bankicon"
              />
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
