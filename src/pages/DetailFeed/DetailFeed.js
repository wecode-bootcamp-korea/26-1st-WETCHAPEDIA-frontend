import React, { Component } from 'react';
import MovieHeader from './MovieHeader';
import MovieInfos from './MovieInfos';
import MovieCommentBox from './MovieCommentBox';

class DetailFeed extends Component {
  constructor() {
    super();
    this.state = {
      infos: {},
      displayScore: 0,
      registerScore: 0,
      isRegister: false,
      isComment: false,
      boxSwitch: false,
      wantLook: false,
      scoreComment: '평가하기',
      commentContainer: [
        {
          divClassName: 'lookingEye',
          src: '/images/looking.png',
          alt: 'looking',
          imgClassName: 'looking',
          text: '보는중',
        },
        {
          divClassName: 'dotMenu',
          src: '/images/dotmenu.png',
          alt: 'menu',
          imgClassName: 'dotmenu',
          text: '더보기',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('/data/movieData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          infos: data,
        });
      });
  }

  changeLookColor = () => {
    const { wantLook } = this.state;
    this.setState({
      wantLook: !wantLook,
    });
  };

  getStarScore = value => {
    this.setState({
      displayScore: value,
      scoreComment: '평가하기',
    });
  };

  registerStarScore = score => {
    const { isRegister } = this.state;
    if (!isRegister) {
      this.setState({
        registerScore: score,
        isRegister: !isRegister,
      });
    } else {
      this.setState({
        registerScore: 0,
        isRegister: !isRegister,
      });
    }
  };

  bindStarScore = comment => {
    const { isRegister, registerScore } = this.state;
    if (!isRegister) {
      this.setState({
        displayScore: 0,
        scoreComment: '평가하기',
      });
    } else {
      this.setState({
        displayScore: registerScore,
        scoreComment: comment,
      });
    }
  };

  changeCommentBoxSwitch = () => {
    const { boxSwitch } = this.state;
    this.setState({
      boxSwitch: !boxSwitch,
    });
  };

  render() {
    const {
      infos,
      commentContainer,
      displayScore,
      scoreComment,
      isRegister,
      wantLook,
      boxSwitch,
    } = this.state;
    return (
      <div className="detailFeedContainer">
        <MovieCommentBox
          boxSwitch={boxSwitch}
          changeCommentBoxSwitch={this.changeCommentBoxSwitch}
        />
        <img
          src="/images/background2.jpeg"
          className="movieBackground"
          alt="movieposter"
        />
        <MovieHeader
          infos={infos.movieBasicInfo}
          commentContainer={commentContainer}
          displayScore={displayScore}
          comment={scoreComment}
          wantLook={wantLook}
          getStarScore={this.getStarScore}
          registerStarScore={this.registerStarScore}
          bindStarScore={this.bindStarScore}
          changeLookColor={this.changeLookColor}
          commentBoxDelete={this.changeCommentBoxSwitch}
        />
        <MovieInfos infos={infos} isRegister={isRegister} wantLook={wantLook} />
      </div>
    );
  }
}

export default DetailFeed;
