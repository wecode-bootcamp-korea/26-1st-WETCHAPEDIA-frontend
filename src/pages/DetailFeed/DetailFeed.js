import React, { Component } from 'react';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieInfos from './MovieInfos/MovieInfos';
import MovieCommentInput from './MovieCommentInput/MovieCommentInput';

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
      commentTexts: '',
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

  getStarScore = score => {
    this.setState({
      displayScore: score,
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

  updateUserComment = () => {
    const { boxSwitch } = this.state;
    this.setState({
      boxSwitch: !boxSwitch,
      isComment: true,
    });
  };

  updateCommentTexts = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  deleteCommentBox = () => {
    this.setState({
      isComment: false,
      commentTexts: '',
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
      isComment,
      commentTexts,
    } = this.state;
    return (
      <div className="detailFeedContainer">
        <MovieCommentInput
          boxSwitch={boxSwitch}
          commentTexts={commentTexts}
          changeCommentBoxSwitch={this.changeCommentBoxSwitch}
          updateUserComment={this.updateUserComment}
          updateCommentTexts={this.updateCommentTexts}
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
          changeCommentBoxSwitch={this.changeCommentBoxSwitch}
        />
        <MovieInfos
          infos={infos}
          isRegister={isRegister}
          wantLook={wantLook}
          isComment={isComment}
          commentTexts={commentTexts}
          deleteCommentBox={this.deleteCommentBox}
        />
      </div>
    );
  }
}

export default DetailFeed;
