import React, { ChangeEvent, KeyboardEvent } from "react";
import { TextField, Button, Box } from "@mui/material";


interface TodoInputProps {
  task: string;
  setTask: (task: string) => void;
  addTask: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ task, setTask, addTask }) => {  
  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      addTask();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: "10px", gap:2 }}>
      <TextField
        variant="outlined"
        label="New Note..."
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
