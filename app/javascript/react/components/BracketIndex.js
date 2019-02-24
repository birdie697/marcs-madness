import React from 'react';
import BracketTile from './BracketTile';

class BracketIndex extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        brackets: []
      }
  }

  componentDidMount() {
    fetch(`/api/v1/users/${window.currentUser.id}/brackets`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
            error = new Error(errorMessage);
          throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        brackets: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render() {
    let brackets = this.state.brackets.map(bracket => {
      return(
        <BracketTile
          key={bracket.id}
          id={bracket.id}
          name={bracket.name}
        />
      )
    })

    return(
      <div>
        <ol>
          {brackets}
        </ol>
      </div>
    )

  }
}

export default BracketIndex;
