import React, { Component } from 'react';

class Profiles extends Component {
  render() {
    const { infos } = this.props;
    return (
      <>
        {actors.map((info, index) => {
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

const actors = [
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
  { name: '전창민', role: '주연' },
];

export default Profiles;
