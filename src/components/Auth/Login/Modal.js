import React, { Component } from 'react';
import LoginRegister from './LoginRegisterComponent/LoginRegister';
// import LoginRegister from './LoginRegisterComponent/LoginRegister';

export default class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <LoginRegister
          type="login"
          url="signin"
          title="로그인"
          inputData={LOGIN_DATA}
        />
        <LoginRegister
          type="register"
          url="signup"
          title="회원가입"
          inputData={REGISTER_DATA}
        />
      </div>
    );
  }
}

const REGISTER_DATA = [
  {
    type: 'name',
    text: '이름',
  },
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];

const LOGIN_DATA = [
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];
