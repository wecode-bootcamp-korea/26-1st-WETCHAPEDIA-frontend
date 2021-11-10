import React, { Component } from 'react';
import './CategoryButton.scss';

export default class Textbutton extends Component {
  render() {
    return (
      <div className="contentText">
        <button className="contentButton">{this.props.title}</button>
      </div>
    );
  }
}
