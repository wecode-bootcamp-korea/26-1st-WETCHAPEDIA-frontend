import React, { Component } from 'react';
import './Profile.scss';

class Profile extends Component {
  render() {
    const { actorinfos } = this.props;
    return (
      <div className="profile">
        <img
          src={actorinfos.profile_image_url}
          alt="profile"
          className="image"
        />
        <div className="info">
          <p>{actorinfos.name}</p>
          <p>
            {actorinfos.role} / {actorinfos.position}
          </p>
        </div>
      </div>
    );
  }
}

export default Profile;
