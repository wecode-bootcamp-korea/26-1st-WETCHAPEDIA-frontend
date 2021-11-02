import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common.scss';
import '../Nav/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <h3>
              Wecha <span className="smallLogo">pedia</span>
            </h3>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
