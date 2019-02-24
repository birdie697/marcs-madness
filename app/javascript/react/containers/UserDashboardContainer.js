import React from 'react';
import BracketContainer from './BracketContainer';

class UserDashboardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className='textBox welcomeBox'>
          <h2>Welcome {window.currentUser.user_name}</h2>
        </div>
        <div>
          <div className=  'small-6 columns'>
            <div className='textBox columnBox'>
              <BracketContainer
              />
            </div>
          </div>
          <div className='small-6 columns'>
            <div className='textBox columnBox small-6 columns'>
              <h2>Leader Board</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDashboardContainer;
