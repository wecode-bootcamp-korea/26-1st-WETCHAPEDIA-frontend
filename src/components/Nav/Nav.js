import React, { Component } from 'react';
import { SEARCHLIST, REGISTER_DATA, LOGIN_DATA } from './navData.js';
import '../Nav/Nav.scss';
import LoginRegister from '../Auth/Login/LoginRegisterComponent/LoginRegister';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isOpenSearchbarTab: false,
      loginModal: false,
      registerModal: false,
    };
  }

  openLogin = () => {
    const { loginModal } = this.state;
    this.setState({
      loginModal: !loginModal,
      registerModal: false,
    });
  };

  openRegister = () => {
    const { registerModal } = this.state;
    this.setState({
      loginModal: false,
      registerModal: !registerModal,
    });
  };

  exceptSection = e => {
    e.stopPropagation();
  };

  BackgroundClose = () => {
    this.setState({
      loginModal: false,
      registerModal: false,
    });
  };

  handleInput = () => {
    const { isOpenSearchbarTab } = this.state;
    this.setState({
      isOpenSearchbarTab: !isOpenSearchbarTab,
    });
  };

  render() {
    const { isOpenSearchbarTab, loginModal, registerModal } = this.state;
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
                {isOpenSearchbarTab && (
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
                )}
              </div>
              <div className="loginBtn">
                <button onClick={this.openLogin}>로그인</button>
              </div>
              <div className="signBtn">
                <button onClick={this.openRegister}>회원가입</button>
              </div>
            </div>
          </nav>
        </header>
        {isOpenSearchbarTab && (
          <div onClick={this.handleInput} className="headerOverlay" />
        )}
        {loginModal && (
          <div className="Nav_modal" onClick={this.BackgroundClose}>
            <div className="Nav_modalin" onClick={this.exceptSection}>
              <LoginRegister
                type="login"
                url="signin"
                title="로그인"
                inputData={LOGIN_DATA}
                status={this.BackgroundClose}
                openRegister={this.openRegister}
              />
            </div>
          </div>
        )}
        {registerModal && (
          <div className="Nav_modal" onClick={this.BackgroundClose}>
            <div className="Nav_modalin" onClick={this.exceptSection}>
              <LoginRegister
                type="register"
                url="signup"
                title="회원가입"
                inputData={REGISTER_DATA}
                status={this.BackgroundClose}
                openLogin={this.openLogin}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Nav;
