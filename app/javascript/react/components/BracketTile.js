import React from 'react';

const BracketTile = props => {
  return(
    <div>
      <li className='listItemMargins'>
        {props.name}
        <a className='editLink listItemMargins'>
          <i className="fas fa-edit"></i>
        </a>
        <a className='deleteLink listItemMargins'>
          <i className="far fa-times-circle"
             id={props.id}
             onClick={props.deleteBracket}
          >
          </i>
        </a>
      </li>
    </div>
  )
}

export default BracketTile;
