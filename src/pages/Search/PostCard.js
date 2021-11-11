import React, { Component } from 'react';
import './PostCard.scss';

export default class InsideNav extends Component {
  render() {
    let { img, title, released, country, rate, sourced } = this.props;
    return (
      <div className="moviePoster">
        <ul>
          <li className="posterImg">
            <img src={img} alt="asd" />
          </li>
          <li className="posterTitle">{title}</li>
          <li className="countryReleaseDate">
            {released}
            <div className="dotImage">・</div>
            {country}
          </li>
          <li className="Rating">{rate}</li>
          <li className="posterCategory">{sourced}</li>
        </ul>
      </div>
    );
  }
}
