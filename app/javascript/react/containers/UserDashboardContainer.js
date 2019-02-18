import React from 'react';

class UserDashboardContainer extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        currentUserId: '',
        currentUserName: ''
      }
  }

  componentDidMount(){
    fetch('api/v1/users')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
            erorr = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        currentUserId: body.id,
        currentUserName: body.user_name
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <div className='textBox welcomeBox'>
          <h2>Welcome {this.state.currentUserName}</h2>
        </div>
        <div>
          <div className=  'small-6 columns'>
            <div className='textBox columnBox'>
              <h2>Your Brackets</h2>
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
