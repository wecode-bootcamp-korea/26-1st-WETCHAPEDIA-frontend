import React, { Component } from 'react';
import './input.scss';
import './button';

export default class Input extends Component {
  handleInput = e => {
    const { valueInput } = this.props;

    valueInput(e);
  };
  render() {
    const { type, text } = this.props;

    return (
      <form className="inputBtnContainer">
        <input
          name={type}
          type={type}
          className="inputSection"
          placeholder={text}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}
