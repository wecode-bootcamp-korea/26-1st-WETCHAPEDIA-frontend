import React, { Component } from 'react';
import './LoginRegister.scss';
import './input.scss';
import './button.scss';
import Input from './input';
import Button from './button';

export default class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  goToMain = () => {
    const { name, email, password } = this.state;
    const { url } = this.props;

    fetch(`http://10.58.2.253:8000/users/${url}`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(res => res.json());
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type, title, inputData } = this.props;
    const { status } = this.props;

    return (
      <>
        <div className="loginContainer">
          <div className="wechaContainer">
            <div className="logoWetchaPedia">
              <span className="initial">WETCHA</span>
              <span>pedia</span>
            </div>

            <span className="loginMark">{title}</span>
          </div>
          {inputData.map((input, idx) => (
            <Input
              key={idx}
              type={input.type}
              text={input.text}
              valueInput={this.handleInput}
            />
          ))}
          <Button value={title} goToMain={this.goToMain} />
          {type === 'login' && (
            <div className="forgetInLogin">
              <span className="forgetPwd">비밀번호를 잊어버리셨나요?</span>
              <span className="guessNoSignupText">
                계정이 없으신가요? 회원가입
              </span>
            </div>
          )}

          {type === 'register' && (
            <div className="forgetContainer">
              <span>이미 가입하셨나요?</span>
              <span className="signupText"> 로그인</span>
            </div>
          )}

          <hr className="divideSocialLine" />

          <button className="socialLoginButton">
            <img alt="facebook으로 로그인" />
          </button>
        </div>
        <div onClick={status} className="overlay" />
      </>
    );
  }
}
