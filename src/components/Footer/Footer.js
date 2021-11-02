import React, { Component } from 'react';
import '../../styles/common.scss';
import '../Footer/Footer.scss';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="topBanner">
          <h4>
            지금까지 <span>★ 635,684,311 개의 평가가</span> 쌓였어요.
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
