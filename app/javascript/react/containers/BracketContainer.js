import React from 'react';
import { Link } from 'react-router';

class BracketContainer extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <h5>Eventual List Of Brackets</h5>
        <Link to='/bracket-form'><h5>Create New Bracket</h5></Link>
      </div>
    )
  }
}

export default BracketContainer;
