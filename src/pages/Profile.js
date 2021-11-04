import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { infos } = this.props;
    return (
      <div className="profile">
        <img
          src="/images/profile.jpeg"
          alt="profile"
          className="profileImage"
        />
        <div className="profileInfo">
          <p>{infos.name}</p>
          <p>{infos.role}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
