import React, { Component } from 'react';
import './Input.scss';
import './Button';

export default class Input extends Component {
  handleInput = e => {
    const { valueInput } = this.props;
    valueInput(e);
  };

  render() {
    const { type, text, errorMessage, checkedEmailPwd } = this.props;

    return (
      <form className="inputBtnContainer">
        <input
          name={type}
          type={type}
          className="inputSection"
          placeholder={text}
          onChange={this.handleInput}
          checkEmailPwd={checkedEmailPwd}
        />
        {checkedEmailPwd ? null : (
          <div className="checkingInfo">
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    );
  }
}
