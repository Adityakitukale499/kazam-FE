import React from "react";

function TodoInput({ task, setTask, addTask }) {
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      addTask();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="New Note..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" onClick={addTask}>
        +
      </button>
    </div>
  );
}

export default TodoInput;
