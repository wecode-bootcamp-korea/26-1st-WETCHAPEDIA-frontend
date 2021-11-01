import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Feeds from '../Feeds/Feeds';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Feeds />
        <Footer />
      </div>
    );
  }
}

export default Main;
