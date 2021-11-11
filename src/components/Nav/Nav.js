import React, { Component } from 'react';
import { SEARCHLIST } from './navData.js';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      updateInputValue: false,
      inputValue: '',
    };
  }

  handleInput = e => {
    const { updateInputValue } = this.state;
    this.setState({
      updateInputValue: !updateInputValue,
    });
  };

  inputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  goToSearchFile = e => {
    let { inputValue } = this.state;
    let { history } = this.props;
    e.preventDefault();
    if (e.key === 'Enter' && inputValue) {
      history.push(`/movies?keyword=${inputValue}`);
      this.setState({ updateInputValue: false });
    }
  };

  render() {
    const { updateInputValue } = this.state;

    return (
      <>
        <header>
          <nav>
            <div className="navLeft">
              <div className="navBar">
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <h3 className="fontLogo">
                    Wetcha <span className="smallLogo">pedia</span>
                  </h3>
                </Link>
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
                    onChange={this.inputChange}
                    onKeyPress={this.goToSearchFile}
                  />
                </form>

                {updateInputValue && (
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
                <button>로그인</button>
              </div>
              <div className="signBtn">
                <button>회원가입</button>
              </div>
            </div>
          </nav>
        </header>
        {updateInputValue && (
          <div onClick={this.handleInput} className="headerOverlay" />
        )}
      </>
    );
  }
}

export default withRouter(Nav);
