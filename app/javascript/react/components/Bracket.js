import React from 'react';


const Bracket = props => {

  return(
    <div>
      <form>
        <div>
          <label>
            <input
              type='radio'
              name={props.name}
              value={props.homeTeam}
              checked={props.selectedGameWinner === props.homeTeam}
              onChange={props.handleOptionChange}
            />
            {props.homeTeam}
          </label>
        </div>
        <div>
          <label>
            <input
              type='radio'
              name={props.name}
              value={props.awayTeam}
              checked={props.selectedGameWinner === props.awayTeam}
              onChange={props.handleOptionChange}
            />
            {props.awayTeam}
          </label>
        </div>
      </form>
      <h4>Winner:  {props.selectedGameWinner}</h4>
    </div>
  )
}

export default Bracket;
