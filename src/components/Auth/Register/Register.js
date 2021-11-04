import React, { Component } from 'react';
import './Register.scss';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  goToMain = () => {
    this.props.history.push('./Main-jaewoo');

    fetch('http://10.58.1.234:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => console.log('결과', res));
  };
  handleNameInput = e => {
    this.setState({
      name: e.target.value,
    });
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
      <div className="SignupContainer">
        <div className="logoSection">
          <div className="RegisterWetchaPedia">
            <span className="initialName">wetcha</span>
            <span className="pediaLogo">pedia</span>
          </div>
          <span className="LogoRegister">회원가입</span>
        </div>
        <form className="enterContainer">
          <input
            className="nameBox"
            placeholder="이름"
            onChange={this.handleNameInput}
          />
          <input
            className="emailBox"
            placeholder="이메일"
            onChange={this.handleEmailInput}
          />
          <input
            className="passwordBox"
            placeholder="비밀번호"
            onChange={this.handlePwdInput}
          />
          <button className="buttonBox">회원가입</button>
        </form>
        <div className="forgetContainer">
          <span>이미 가입하셨나요?</span>
          <span className="signupText"> 로그인</span>
        </div>
        <hr className="divideLine" />

        <button className="socialLogin">
          <img />
          Facebook 으로 로그인
        </button>
      </div>
    );
  }
}

export default Register;
