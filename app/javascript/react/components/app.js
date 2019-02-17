import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './NavBar';
import UserDashboardContainer from '../containers/UserDashboardContainer';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <Route path="users" component={UserDashboardContainer} />
      </Route>
    </Router>
  )
}

export default App;
