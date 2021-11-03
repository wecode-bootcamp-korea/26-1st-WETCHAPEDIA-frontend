import React, { Component } from 'react';
import Feed from './Feed';
import './Feeds.scss';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ feedsData: data });
      });
  }

  render() {
    let { feedsData } = this.state;

    return (
      <article className="feeds">
        {feedsData.map(({ category, feeds }, index) => {
          return (
            <section key={index} className="feedsContainer">
              <div className="feedsCategoryNameContainer">
                <p className="feedsCategoryName">{category}</p>
              </div>
              <Feed feeds={feeds} />
            </section>
          );
        })}
      </article>
    );
  }
}

export default Feeds;
