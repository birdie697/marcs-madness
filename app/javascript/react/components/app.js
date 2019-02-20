import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './NavBar';
import UserDashboardContainer from '../containers/UserDashboardContainer';
import BracketForm from './BracketForm';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <Route path="users" component={UserDashboardContainer} />
        <Route path="bracket-form" component={BracketForm} />
      </Route>
    </Router>
  )
}

export default App;
