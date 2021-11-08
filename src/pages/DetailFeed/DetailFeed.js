import React, { Component } from 'react';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieInfos from './MovieInfos/MovieInfos';
import MovieCommentModal from './MovieCommentModal/MovieCommentModal';

class DetailFeed extends Component {
  constructor() {
    super();
    this.state = {
      infos: {},
      displayScore: 0,
      registerScore: 0,
      isCommentRegister: false,
      isModalOpen: false,
      wantLook: false,
      scoreComment: '평가하기',
      registerStarComment: '평가하기',
      commentTexts: '',
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

  changeWantLookState = () => {
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

  registerStarScore = (score, comment) => {
    const { registerScore } = this.state;
    if (!registerScore) {
      this.setState({
        registerStarComment: comment,
        registerScore: score,
      });
    } else {
      this.setState({
        registerScore: 0,
      });
    }
  };

  bindStarScore = () => {
    const { registerScore, registerStarComment } = this.state;
    if (!registerScore) {
      this.setState({
        displayScore: 0,
        scoreComment: '평가하기',
      });
    } else {
      this.setState({
        displayScore: registerScore,
        scoreComment: registerStarComment,
      });
    }
  };

  changeCommentBoxSwitch = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  updateUserComment = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
      isCommentRegister: true,
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
      isCommentRegister: false,
      commentTexts: '',
    });
  };

  render() {
    const {
      infos,
      displayScore,
      registerScore,
      scoreComment,
      wantLook,
      isModalOpen,
      isCommentRegister,
      commentTexts,
    } = this.state;

    return (
      <div className="detailFeedContainer">
        {infos.movie && (
          <>
            <MovieCommentModal
              isModalOpen={isModalOpen}
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
              infos={infos.movie.movie_basic_info}
              displayScore={displayScore}
              comment={scoreComment}
              wantLook={wantLook}
              getStarScore={this.getStarScore}
              registerStarScore={this.registerStarScore}
              bindStarScore={this.bindStarScore}
              changeWantLookState={this.changeWantLookState}
              changeCommentBoxSwitch={this.changeCommentBoxSwitch}
            />
            <MovieInfos
              infos={infos.movie}
              registerScore={registerScore}
              wantLook={wantLook}
              isCommentRegister={isCommentRegister}
              commentTexts={commentTexts}
              deleteCommentBox={this.deleteCommentBox}
            />
          </>
        )}
      </div>
    );
  }
}

export default DetailFeed;
