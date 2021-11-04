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
            <div className="list">
              <div className="select">
                <span>한국어</span>
              </div>
            </div>
            <div className="footerSns">
              <img
                src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494464.png?token=exp=1635928138~hmac=12a8205b87e97ae46b873389f692ab6b"
                atl="facebookicon"
              />
              <img
                src="https://cdn-icons.flaticon.com/png/512/3669/premium/3669691.png?token=exp=1635928179~hmac=b89ced8ea398e56fffbceb5beb218f96"
                atl="twitericon"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/625/625150.png"
                atl="bankicon"
              />
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
