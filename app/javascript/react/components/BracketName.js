import React from 'react';

const BracketName = props => {

  return (
    <form>
      <div className="row fullWidth regionTitle headSpace">
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
    </form>
  )
};

export default BracketName;
