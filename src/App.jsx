import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";

const socket = io.connect("https://kazam-be11.onrender.com");

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://kazam-be11.onrender.com/fetchAllTasks")
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
    <div className="main-container">
      <div className="center-container">
        <TodoInput task={task} setTask={setTask} addTask={addTask} />
        <h2 className="app-heading">Notes</h2>
        <hr />
        <ul>
          {tasks.map((listItem, i) => (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
