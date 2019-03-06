import React from 'react';

const BracketTile = props => {
  return(
    <div>
      <li className='listItemMargins'>
        <a href={`/users/${window.currentUser.id}/brackets/${props.id}`}>
          {props.name}
        </a>
        <a
          className='editLink listItemMargins'
          href={`/users/${window.currentUser.id}/brackets/${props.id}/edit`}
          >
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
