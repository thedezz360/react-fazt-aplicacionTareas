import "./App.css";
import { useState } from "react";

function App() {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    //save task in localStore
    localStorage.setItem('tasks', newTaskName)
    //clear input
    setNewTaskName('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
          value={newTaskName}
        />
        <button>Save task</button>
      </form>
    </div>
  );
}

export default App;
