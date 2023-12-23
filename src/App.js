import React, { useState } from "react";
import Header from "./Header/Header";

const TodoList = ({ tasks, onToggle, onRemoveCompleted }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => onToggle(index)}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <button onClick={onRemoveCompleted}>Remove Completed</button>
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Read SpringBoot", completed: false },
    { text: "Complete assignments", completed: false },
    { text: "Prepare breakfast", completed: false },
    { text: "Sleep for 2 hours", completed: false },
    { text: "Take a shower", completed: false },
  ]);

  const toggleTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index].completed = !newTasks[index].completed;
      return newTasks;
    });
  };

  const removeCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div>
      <Header />
      <TodoList
        tasks={tasks}
        onToggle={toggleTask}
        onRemoveCompleted={removeCompletedTasks}
      />
    </div>
  );
};

export default App;
