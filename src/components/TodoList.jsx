import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Todolist({ item, index, deleteItem }) {
  return (
    <ListItem className="list-item">
      <ListItemText primary={item} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteItem(index)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todolist;
