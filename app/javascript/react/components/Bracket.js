import React from 'react';


const Bracket = props => {
  console.log(`props.selectedGame1Winner ${props.selectedGameWinner}`)

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
        <div>
          <h4>You've selected {props.selectedGameWinner} to win!</h4>
        </div>
      </form>
    </div>
  )
}

export default Bracket;
