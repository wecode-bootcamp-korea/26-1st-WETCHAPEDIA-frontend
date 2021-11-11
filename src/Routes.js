import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import DetailFeed from './pages/DetailFeed/DetailFeed';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/movies/:id" component={DetailFeed} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
