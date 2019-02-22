import React from 'react';

const BracketName = props => {

  return (
    <div className="row fullWidth bannerTitle headSpace">
      <div className="small-6 columns">
        <h2>
          Bracket Name:
        </h2>
          <input
            type='text'
            name="name"
            value={props.bracketName}
            onChange={props.handleNewBracketName}
          />
      </div>
      <div className="small-6 columns">
        <h2>Bracket Score: {props.bracketScore}</h2>
      </div>
    </div>
  )
};

export default BracketName;
