import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="navLeft">
            <div className="navBar">
              <h3 className="fontLogo">
                Wetcha <span className="smallLogo">pedia</span>
              </h3>
              <div className="navigation">
                <p>영화</p>
                <p>TV 프로그램</p>
                <p>책</p>
              </div>
            </div>
          </div>

          <div className="navRight">
            <div className="searchWrapper">
              <form className="searchbar">
                <input
                  type="search"
                  id="id"
                  placeholder="콘텐츠,인물,컬렉션,유저를 검색해보세요."
                />
              </form>
              {/* <div className="searchBox">
                <p>창 만들기</p>
              </div> */}
            </div>
            <div className="loginBtn">
              <button>로그인</button>
            </div>
            <div className="signBtn">
              <button>회원가입</button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
