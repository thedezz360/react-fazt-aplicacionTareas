import "./App.css";
import { useState } from "react";
import { TaskCreator } from "./components/TaskCreator";

function App() {

  const [tasksItems, setTasksItems] = useState([
    { name: "mi primer tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercera tarea", done: false },
  ]);

  function createNewTask(taskName){
    setTasksItems([...tasksItems, {name:taskName, done: false } ])
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr><td>Task</td></tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>
                {task.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
