import React, { Component } from 'react';
import './CategoryButton.scss';

export default class Textbutton extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="contentText">
        <button className="contentButton">{title}</button>
      </div>
    );
  }
}
