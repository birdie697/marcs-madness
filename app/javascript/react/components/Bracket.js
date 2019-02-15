import React from 'react';


const Bracket = props => {

  return(
    <form>
      <div className={props.round}>
        <div className='teamBlock'>
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
        <div className='teamBlock'>
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
      </div>
    </form>
  )
}

export default Bracket;
