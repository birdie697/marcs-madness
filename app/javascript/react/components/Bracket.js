import React from 'react';


const Bracket = props => {

  return(
    <div className='gameBlock'>
      <form>
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
      </form>
    </div>
  )
}

export default Bracket;
