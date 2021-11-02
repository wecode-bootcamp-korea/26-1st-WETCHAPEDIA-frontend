import React, { Component } from 'react';
import './sample.scss';

class sample extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

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
          <span className="initial">wechachapedia</span>
          <span className="loginMark">로그인</span>
        </div>
        <form className="signupContainer">
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
          <button className="buttonLoginBox">로그인</button>
        </form>
        <div className="forgetLoginContainer">
          <span className="forgetPwd">비밀번호를 잊어버리셨나요?</span>
          <span className="signupLoginText">계정이 없으신가요? 회원가입</span>
        </div>
        <hr className="divideSocialLine" />

        <button
          className="socialLoginButton"
          disabled={
            !(
              this.state.email.indexOf('@') !== -1 &&
              this.state.password.length > 5
            )
          }
        >
          <img />
          Facebook 으로 로그인
        </button>
      </div>
    );
  }
}

export default sample;
