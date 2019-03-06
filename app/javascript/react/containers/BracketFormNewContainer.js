import React from 'react';
import { browserHistory } from 'react-router';
import BracketForm from '../components/BracketForm';

//make this a const and move to components folder?
const BracketFormNewContainer = props => {

  let bracketId = '';
  let formType = 'new';

  return(
    <BracketForm
      bracketId={bracketId}
      formType={formType}
    />
  )
}

export default BracketFormNewContainer;
