import React, { Component } from 'react';

class Profiles extends Component {
  render() {
    const { infos } = this.props;
    // console.log(infos[0].actors);
    return (
      <>
        {infos.actors &&
          infos.actors.map((info, index) => {
            return (
              <div className="profile" key={index}>
                <img
                  src="/images/profile.jpeg"
                  alt="profile"
                  className="profileImage"
                />
                <div className="profileInfo">
                  <p>{info.name}</p>
                  <p>{info.role}</p>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}

export default Profiles;
