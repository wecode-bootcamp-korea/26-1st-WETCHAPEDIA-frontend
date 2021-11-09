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

    fetch('http://10.58.1.168:8000/movies/7/comments', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.p-T5WjCAaEe-EgTdf-lI6bQ2G4Rf7fMhR829soN5ICI',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentTexts: data.description,
        });
        console.log(data);
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
      });
      fetch('http://10.58.3.106:8000/movies/rate/3', {
        method: 'post',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.p-T5WjCAaEe-EgTdf-lI6bQ2G4Rf7fMhR829soN5ICI',
        },
        body: JSON.stringify({
          rate: score,
        }),
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            registerScore: +data.rate,
          });
        });
    } else {
      this.setState({
        registerScore: 0,
      });
      fetch('http://10.58.3.106:8000/movies/rate/3', {
        method: 'delete',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.p-T5WjCAaEe-EgTdf-lI6bQ2G4Rf7fMhR829soN5ICI',
        },
      })
        .then(res => res.json())
        .then(data => {});
    }
  };

  bindStarScore = () => {
    const { registerScore, registerStarComment } = this.state;
    this.setState({
      displayScore: !registerScore ? 0 : registerScore,
      scoreComment: !registerScore ? '평가하기' : registerStarComment,
    });
  };

  changeCommentModalState = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  updateUserComment = commentTexts => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
      isCommentRegister: true,
    });
    fetch('http://10.58.1.168:8000/movies/7/comments  ', {
      method: 'post',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.p-T5WjCAaEe-EgTdf-lI6bQ2G4Rf7fMhR829soN5ICI',
      },
      body: JSON.stringify({
        description: commentTexts,
      }),
    })
      .then(res => res.json())
      .then(data => {});
  };

  updateCommentTexts = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  deleteCommentBox = () => {
    fetch('http://10.58.1.168:8000/movies/7/comments', {
      method: 'delete',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.p-T5WjCAaEe-EgTdf-lI6bQ2G4Rf7fMhR829soN5ICI',
      },
    })
      .then(res => res.json())
      .then(data => {});
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
              changeCommentModalState={this.changeCommentModalState}
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
              changeCommentModalState={this.changeCommentModalState}
            />
            <MovieInfos
              infos={infos.movie}
              registerScore={registerScore}
              wantLook={wantLook}
              isCommentRegister={isCommentRegister}
              commentTexts={commentTexts}
              deleteCommentBox={this.deleteCommentBox}
              changeCommentModalState={this.changeCommentModalState}
            />
          </>
        )}
      </div>
    );
  }
}

export default DetailFeed;
