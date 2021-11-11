import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import SearchFile from '../src/pages/Search/SearchFile';
import DetailFeed from './pages/DetailFeed/DetailFeed';
import Main from './pages/Main/Main';
import Footer from '../src/components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/movies/:id" component={DetailFeed} />
          <Route exact path="/movies" component={SearchFile} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
