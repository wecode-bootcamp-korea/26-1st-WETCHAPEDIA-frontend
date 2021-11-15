import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
export default class Button extends Component {
  render() {
    const { value, goToMain } = this.props;
    return (
      <button onClick={goToMain} className="buttonLoginBox">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          {value}
        </Link>
      </button>
    );
  }
}
