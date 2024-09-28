import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


interface TodolistProps {
  item: string;
  index: number;
  deleteItem: (index: number) => void;
}

const Todolist: React.FC<TodolistProps> = ({ item, index, deleteItem }) => {
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
};

export default Todolist;
