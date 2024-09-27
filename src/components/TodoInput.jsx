import React from "react";
import { TextField, Button, Box } from "@mui/material";

function TodoInput({ task, setTask, addTask }) {
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      addTask();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: "10px" }}>
      <TextField
        variant="outlined"
        label="New Note..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnterPress}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        +
      </Button>
    </Box>
  );
}

export default TodoInput;
