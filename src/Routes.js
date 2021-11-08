import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from './components/Auth/Login/Modal';
import Main from './pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Modal} />
          {/* <Route exact path="/Register" component={Register} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
