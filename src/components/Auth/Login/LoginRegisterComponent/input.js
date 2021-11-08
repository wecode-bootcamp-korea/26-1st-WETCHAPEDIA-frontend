import React, { Component } from 'react';
import './input.scss';
import './button';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleInput = e => {
    const { value } = e.target;
    const { valueInput } = this.props;
    this.setState({
      value: value,
    });
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
