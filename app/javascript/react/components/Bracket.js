import React from 'react';

const Bracket = props => {

  return(
    <div className={props.round}>
      <div className={props.region}>
      <h6 className='gameNumber'>{props.name}</h6>
        <div className='teamBlock'>
          <label>
            <input
              type='radio'
              name={props.name}
              value={props.homeTeam}
              checked={props.selectedGameWinner === props.homeTeam && props.selectedGameWinner !== ''}
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
              checked={props.selectedGameWinner === props.awayTeam && props.selectedGameWinner !== ''}
              onChange={props.handleOptionChange}
            />
            {props.awayTeam}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Bracket;
