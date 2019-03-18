import React from 'react';
import BracketTile from './BracketTile';
import swal from 'sweetalert';

class BracketIndex extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        brackets: [],
        error: ''
      }
    this.onDelete = this.onDelete.bind(this)
  }

  deleteBracket(id) {
    return fetch(`/api/v1/users/${window.currentUser.id}/brackets/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      credentials: 'same-origin'
    })
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
      if (body.error) {
        throw body.error
      }
      swal(body.title, body.text, body.type)
      this.setState({
        brackets: this.state.brackets.filter(bracket => bracket.id !== body.bracket_id)
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  onDelete(event) {
    event.preventDefault();

    let id = event.target.id

    swal({
      title: "Delete Bracket",
      text: "Once deleted, this bracket is gone, gone, gone away",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deleteBracket(id)
      } else {
        swal("FINE....", "Don't delete the bracket")
      }
    })
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
          deleteBracket={this.onDelete}
        />
      )
    })

    return(
      <table>
        <thead>
          <tr>
            <th>BRACKET</th>
            <th className="iconPosition">EDIT</th>
            <th className="iconPosition">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {brackets}
        </tbody>
      </table>
    )

  }
}

export default BracketIndex;
