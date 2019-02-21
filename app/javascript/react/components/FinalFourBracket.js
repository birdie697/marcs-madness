import React from 'react';

const FinalFourBracket = props => {

  return(
      <form>
        <div className={props.round}>
          <div className={props.regionHome}>
            <h4>{props.regionHome}</h4>
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
          </div>
          <div className={props.regionAway}>
          <h4>{props.regionAway}</h4>
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
      </form>
  )
};

export default FinalFourBracket;
