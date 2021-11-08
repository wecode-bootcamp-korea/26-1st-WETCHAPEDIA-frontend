// import React, { Component } from 'react';
// import './Register.scss';

// export default class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//     };
//   }

//   goToLogin = () => {
//     const { name, email, password } = this.state;
//     fetch('', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: name,
//         email: email,
//         password: password,
//       }),
//     }).then(res => res.json());
//   };

//   handleNameInput = e => {
//     const { value } = e.target;
//     this.setState({
//       name: value,
//     });
//   };

//   handleEmailInput = e => {
//     const { value } = e.target;
//     this.setState({
//       email: value,
//     });
//   };

//   handlePwdInput = e => {
//     const { value } = e.target;
//     this.setState({
//       password: value,
//     });
//   };

//   render() {
//     return (
//       <div className="signupContainer">
//         <div className="logoSection">
//           <div className="registerWetchaPedia">
//             <span className="initialName">wetcha</span>
//             <span className="pediaLogo">pedia</span>
//           </div>
//           <span className="logoRegister">회원가입</span>
//         </div>
//         <form className="enterContainer">
//           <input
//             className="nameBox"
//             placeholder="이름"
//             onChange={this.handleNameInput}
//           />
//           <input
//             className="emailBox"
//             placeholder="이메일"
//             onChange={this.handleEmailInput}
//           />
//           <input
//             className="passwordBox"
//             placeholder="비밀번호"
//             onChange={this.handlePwdInput}
//           />
//           <button className="buttonBox">회원가입</button>
//         </form>

//         <hr className="divideLine" />

//         <button className="socialLogin">
//           <img alt="facebook" />
//           Facebook 으로 로그인
//         </button>
//       </div>
//     );
//   }
// }
