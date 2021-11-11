import React, { Component } from 'react';
import './CategoryButton.scss';

export default class CategoryButton extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="categoryButton">
        <button className="contentButton">{title}</button>
      </div>
    );
  }
}
