import React, { Component } from 'react';
import { SEARCHLIST } from './navData.js';
import '../Nav/Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      seen: false,
    };
  }

  handleInput = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  open = () => {
    this.setState({
      seen: true,
    });
  };

  close = () => {
    this.setState({
      seen: false,
    });
  };

  render() {
    return (
      <>
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
                    autoComplete="off"
                    onClick={this.handleInput}
                  />
                </form>

                {this.state.seen ? (
                  <div className="searchbarList">
                    <div className="searchListDown">
                      <p>인기 검색어</p>
                      {SEARCHLIST.map(list => {
                        return (
                          <h3 className="searchList" key={list.id}>
                            {list.content}
                          </h3>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
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
        {this.state.seen ? (
          <div onClick={this.handleInput} className="headerOverlay" />
        ) : null}
      </>
    );
  }
}

export default Nav;
