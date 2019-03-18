import React from 'react';

const BracketTile = props => {
  return(
    <tr className="rowData">
      <td>
        <a href={`/users/${window.currentUser.id}/brackets/${props.id}`}>
          {props.name}
        </a>
      </td>
      <td className="iconPosition">
        <a
          className='editLink'
          href={`/users/${window.currentUser.id}/brackets/${props.id}/edit`}
          >
          <i className="fas fa-edit"></i>
        </a>
      </td>
      <td className="iconPosition">
        <a className='deleteLink'>
          <i className="far fa-times-circle"
             id={props.id}
             onClick={props.deleteBracket}
          >
          </i>
        </a>
      </td>
    </tr>
  )
}

export default BracketTile;
