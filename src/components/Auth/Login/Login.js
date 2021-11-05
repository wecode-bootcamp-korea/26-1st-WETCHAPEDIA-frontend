import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  goToMain = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    history.push('');

    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(res => res.json());
  };

  handleEmailInput = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePwdInput = e => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div className="loginContainer">
        <div className="wechaContainer">
          <div className="logoWetchaPedia">
            <span className="initial">WETCHA</span>
            <span>pedia</span>
          </div>

          <span className="loginMark">로그인</span>
        </div>
        <form className="inputBtnContainer">
          <input
            className="emailLoginBox"
            placeholder="이메일"
            onChange={this.handleEmailInput}
          />
          <input
            className="passwordLoginBox"
            placeholder="비밀번호"
            onChange={this.handlePwdInput}
          />
          <button className="buttonLoginBox" onClick={this.goToMain}>
            로그인
          </button>
        </form>
        <div className="forgetLoginContainer">
          <span className="forgetPwd">비밀번호를 잊어버리셨나요?</span>
          <span className="guessNoSignupText">계정이 없으신가요? 회원가입</span>
        </div>
        <hr className="divideSocialLine" />

        <button className="socialLoginButton">
          <img alt="" facebook />
          Facebook 으로 로그인
        </button>
      </div>
    );
  }
}

export default Login;
