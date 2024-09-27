import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";
import { Typography, CssBaseline, Box } from "@mui/material";

const socket = io.connect("http://localhost:5001");

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/fetchAllTasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));

    socket.on("taskAdded", (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    socket.on("taskDeleted", (deletedTaskIndex) => {
      setTasks((prevTasks) =>
        prevTasks.filter((_, i) => i !== deletedTaskIndex)
      );
    });

    return () => {
      socket.off("taskAdded");
      socket.off("taskDeleted");
    };
  }, []);

  const addTask = () => {
    if (task.trim() !== "") {
      socket.emit("add", task);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    socket.emit("deleteTask", index);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          p: "0 1rem",
          backgroundColor: "#f0f4f7",
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            height: "70vh",
            p: "1rem",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflowY: "scroll",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{
              textAlign: "center",
              color: "#333",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Todo List
          </Typography>
          <TodoInput task={task} setTask={setTask} addTask={addTask} />
          <hr />
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              marginTop: "1rem",
            }}
          >
            {tasks.map((listItem, i) => (
              <Todolist
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteTask}
              />
            ))}
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default App;
