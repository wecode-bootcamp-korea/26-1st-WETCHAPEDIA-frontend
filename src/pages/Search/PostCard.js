import React, { Component } from 'react';
import './PostCard.scss';

export default class InsideNav extends Component {
  render() {
    return (
      <div className="moviePoster">
        <ul>
          <li className="posterImg">
            <img src={this.props.img} alt="asd" />
          </li>
          <li className="posterTitle">{this.props.title}</li>
          <li className="countryReleaseDate">
            {this.props.released}
            <div className="dotImage">・</div>
            {this.props.country}
          </li>
          <li className="Rating">{this.props.rate}</li>
          <li className="posterCategory">{this.props.sourced}</li>
        </ul>
      </div>
    );
  }
}
