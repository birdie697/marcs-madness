import React from 'react';
import { browserHistory } from 'react-router';
import BracketForm from '../components/BracketForm';

//make this a const and move to components folder?
class BracketFormEditContainer extends React.Component {
  constructor(props) {
    super(props)
    }

  render(){

    let bracketId = this.props.params.id;
    let formType = 'edit';

    return(
      <BracketForm
        bracketId={bracketId}
        formType={formType}
      />
    )
  }
}

export default BracketFormEditContainer;
