import React from 'react';

const BracketWinner = props => {
  return(
    <div className={props.round}>
      <h5>Winner</h5>
      <div className='teamBlock'>
        {props.winner}
      </div>
    </div>
  )

};

export default BracketWinner;
