import { useState } from "react";

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
		createNewTask(newTaskName);
    //save task in localStore
    localStorage.setItem("tasks", newTaskName);
    //clear input
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <button>Save task</button>
    </form>
  );
};


