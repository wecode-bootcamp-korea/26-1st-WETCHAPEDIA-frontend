import React, { Component } from 'react';
import Profiles from './Profiles';

class MovieInfos extends Component {
  render() {
    return (
      <section className="movieInfos">
        <div className="mainInfo">
          <div className="infoComment">
            <span>대단한 작품이군요! 전창민 님의 감동을 글로 남겨보세요</span>
            <button type="button" className="infoCommentButton">
              코멘트 남기기
            </button>
          </div>
          <div className="infoHeader">
            <span>기본정보</span>
            <span>더보기</span>
          </div>
          <div className="infoMain">
            <p>인터스텔라</p>
            <p>2014 · 미국 · 모험</p>
            <p>2시간 49분 · 12세</p>
            <p>
              세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난
              20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도
              해체되었다. 이때 시공간에 불가사의한 틈이 열리고, 남은 자들에게는
              이...
            </p>
          </div>
          <div className="infoContour" />
          <div className="actorProfiles">
            <p>출연제작</p>
            <div className="profileContainer">
              <Profiles />
            </div>
          </div>
          <div className="infoContour" />
          <div className="movieCommentContainer">
            <div className="commentHeader">
              <span>코멘트</span>
              <span>더보기</span>
            </div>
            <div className="commentContainer">
              <div className="commentIndividual">
                <p>위코드 26기 전창민</p>
                <div className="commentContour" />
                <p>
                  안녕하세요 제이름은 전창민입니다.안녕하세요 제이름은
                  전창민입니다.안녕하세요 제이름은 전창민입니다.안녕하세요
                  제이름은 전창민입니다.안녕하세요 제이름은
                  전창민입니다.안녕하세요 제이름은 전창민입니다.
                </p>
                <div className="commentContour" />
                <div className="commentLike">
                  <img
                    src="/images/thumb.png"
                    alt="thumb"
                    className="commentThumb"
                  />
                  <span>30</span>
                </div>
                <div className="commentContour" />
                <div className="likeCountButton"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sideInfo" />
      </section>
    );
  }
}

export default MovieInfos;
