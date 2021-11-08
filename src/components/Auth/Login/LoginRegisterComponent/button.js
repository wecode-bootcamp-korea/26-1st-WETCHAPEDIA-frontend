import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

export default class Button extends Component {
  render() {
    const { value, goToMain } = this.props;
    return (
      <button onClick={goToMain} className="buttonLoginBox">
        <Link to="/">{value}</Link>
      </button>
    );
  }
}
