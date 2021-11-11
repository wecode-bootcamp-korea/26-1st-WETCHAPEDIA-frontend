import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Input from './Input';
import Button from './Button';
import './LoginRegister.scss';
import { API } from '../../../../config';

class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  checkingRegister = () => {
    const { name, email, password } = this.state;
    const { url, history, status } = this.props;

    fetch(`${API.movies}/users/${url}`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (url === 'signup') {
          if (result.message === 'EMAIL_NOT_VALID') {
            alert(' 유효하지 않은 이메일 , 형식 오류.');
          } else if (result.message === 'PASSWORD_NOT_VALID') {
            alert('유효하지 않은 패스워드, 형식 오류.');
          } else if (result.message === 'DUPLICATE_EMAIL_ERROR') {
            alert('중복된 이메일');
          } else if (result.message) {
            alert('회원가입 성공');
            localStorage.setItem('token', result.access_token);
            history.push('/');
          }
        } else {
          if (result.message === 'INVALID_USER') {
            alert('패스워드 불일치');
          } else if (result.message === 'KEY_ERROR') {
            alert('데이터가 정확하게 입력되지 않았습니다');
          } else if (result.message === 'Unauthorized') {
            alert('유저의 정보가 존재하지 않습니다.');
          } else if (result.message) {
            alert('로그인 성공!');
            localStorage.setItem('token', result.access_token);
            status();
            history.push('/');
          }
        }
      });
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
    let {
      type,
      title,
      inputData,
      openLogin,
      openRegister,
      status,
      loginSuccess,
    } = this.props;

    console.log(this.props.status);

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
          <Button value={title} goToMain={this.checkingRegister} />
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

export default withRouter(LoginRegister);
