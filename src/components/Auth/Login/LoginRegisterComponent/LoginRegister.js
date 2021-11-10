import React, { Component } from 'react';
import './LoginRegister.scss';
import './Input.scss';
import './Button.scss';
import Input from './Input';
import Button from './Button';

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
    fetch(`http://10.58.3.106:8000/users/${url}`, {
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

  checkEmailPwd = type => {
    const { email, password } = this.state;
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const emailCheck = emailRegex.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    const passwordCheck = passwordRegex.test(password);
    if (type === 'email') return emailCheck;
    if (type === 'password') return passwordCheck;
  };

  render() {
    const { type, title, inputData, openLogin, openRegister, status } =
      this.props;

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
              errorMessage={input.error}
              checkedEmailPwd={this.checkEmailPwd(input.type)}
            />
          ))}
          <Button value={title} goToMain={this.goToMain} />
          {type === 'login' && (
            <div className="forgetInLogin">
              <span className="forgetPwd">비밀번호를 잊어버리셨나요?</span>
              <span className="guessNoSignupText">
                계정이 없으신가요?{' '}
                <button onClick={openRegister}>회원가입</button>
              </span>
            </div>
          )}
          {type === 'register' && (
            <div className="forgetContainer">
              <span>이미 가입하셨나요?</span>
              <button className="signupText" onClick={openLogin}>
                {' '}
                로그인
              </button>
            </div>
          )}
          <hr className="divideSocialLine" />
          <button className="socialLoginButton">facebook으로 로그인</button>
        </div>
        <div onClick={status} className="overlay" />
      </>
    );
  }
}
