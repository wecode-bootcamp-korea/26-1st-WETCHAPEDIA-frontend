import React, { Component } from 'react';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieInfos from './MovieInfos/MovieInfos';
import MovieCommentModal from './MovieCommentModal/MovieCommentModal';
import { API } from '../../config';

class DetailFeed extends Component {
  constructor() {
    super();
    this.state = {
      movieInfos: {},
      displayScore: 0,
      registerScore: 0,
      isCommentRegister: false,
      isModalOpen: false,
      wantLook: false,
      scoreComment: '평가하기',
      registerStarComment: '평가하기',
      commentTexts: '',
      movieId: '',
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    let token = localStorage.getItem('token');
    fetch(`${API.movies}${pathname}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieInfos: data,
          movieId: pathname.slice(8),
        });
        if (data.message === '영화 정보가 없습니다.') {
          alert('없는 영화 정보입니다!!');
        }
      });
    fetch(`${API.movies}${this.props.location.pathname}/comments`, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentTexts: data.description,
        });
      });
  }

  changeWantLookState = () => {
    const { wantLook, movieId } = this.state;
    this.setState({
      wantLook: !wantLook,
    });
    fetch(`${API.movies}/users/wishlist`, {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        movie_id: movieId,
      }),
    })
      .then(res => res.json())
      .then(data => {});
  };

  getStarScore = score => {
    this.setState({
      displayScore: score,
      scoreComment: '평가하기',
    });
  };

  registerStarScore = (score, comment) => {
    const { registerScore, movieId } = this.state;
    if (!registerScore) {
      this.setState({
        registerStarComment: comment,
      });
      fetch(`${API.movies}/movies/rate/${movieId}`, {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('token'),
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
    }
  };

  deleteStarScore = () => {
    const { registerScore, movieId } = this.state;
    if (registerScore) {
      this.setState({
        registerScore: 0,
      });
      fetch(`${API.movies}/movies/rate/${movieId}`, {
        method: 'delete',
        headers: {
          Authorization: localStorage.getItem('token'),
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
    const { isModalOpen, movieId } = this.state;
    let token = localStorage.getItem('token');

    this.setState({
      isModalOpen: !isModalOpen,
      isCommentRegister: true,
    });
    fetch(`${API.movies}/movies/${movieId}/comments`, {
      method: 'post',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        description: commentTexts,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'SUCCESS') {
          alert('댓글 입력 성공!!');
        } else if (data.message === 'INVALID_USER') {
          alert('유효하지 않은 회원');
        }
      });
  };

  updateCommentTexts = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  deleteCommentBox = () => {
    const { movieId } = this.state;
    fetch(`${API.movies}/movies/${movieId}/comments`, {
      method: 'delete',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'KEY_ERROR') {
          alert('댓글 입력이 실패됐습니다!');
          return;
        }
      });
    this.setState({
      isCommentRegister: false,
      commentTexts: '',
    });
  };

  render() {
    const {
      movieInfos,
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
        {movieInfos.movie && (
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
              infos={movieInfos.movie.movie_basic_info}
              displayScore={displayScore}
              comment={scoreComment}
              wantLook={wantLook}
              getStarScore={this.getStarScore}
              registerStarScore={this.registerStarScore}
              deleteStarScore={this.deleteStarScore}
              bindStarScore={this.bindStarScore}
              changeWantLookState={this.changeWantLookState}
              changeCommentModalState={this.changeCommentModalState}
            />
            <MovieInfos
              infos={movieInfos.movie}
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
