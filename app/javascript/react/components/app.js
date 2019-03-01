import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './NavBar';
import UserDashboardContainer from '../containers/UserDashboardContainer';
import BracketFormNewContainer from '../containers/BracketFormNewContainer';
import BracketFormEditContainer from '../containers/BracketFormEditContainer';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <Route path='/users/:id' component={UserDashboardContainer} />
        <Route path='/users/:id/brackets/new' component={BracketFormNewContainer} />
        <Route path='/users/:user_id/brackets/:id/edit' component={BracketFormEditContainer} />
      </Route>
    </Router>
  )
}

export default App;
