import React from 'react';
import { Link } from 'react-router';
import BracketIndex from '../components/BracketIndex';

class BracketContainer extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <h2>Your Brackets</h2>
        <BracketIndex
        />
        <Link to={`/users/${window.currentUser.id}/brackets/new`}>
          <h5 className="lookLikeALink">Create New Bracket</h5>
        </Link>
      </div>
    )
  }
}

export default BracketContainer;
