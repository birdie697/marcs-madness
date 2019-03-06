import React from 'react';
import BracketForm from '../components/BracketForm';

class BracketShowContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){

    let bracketId = this.props.params.id;
    let formType = 'show';

    return(
      <BracketForm
        bracketId={bracketId}
        formType={formType}
      />
    )
  }
}

export default BracketShowContainer;
