import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';  // Import the icon

function Todolist({ item, index, deleteItem }) {
  return (
    <li className="list-item">
      {item}
      <span className='icons'>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="icon-delete"
          onClick={() => deleteItem(index)}
        />
      </span>
    </li>
  );
}

export default Todolist;
