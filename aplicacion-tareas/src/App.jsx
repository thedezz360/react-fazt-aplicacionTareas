import "./App.css";
import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  //funcion para crear una tarea y añadirla a tasksItems
  function createNewTask(taskName) {
    if (tasksItems.find((task) => task.name === taskName)) return;

    setTasksItems([...tasksItems, { name: taskName, done: false }]);
  }

  const toggleTask = (task) => {
    //buscamos la tarea con el nombre pasado por parametro y
    //al objeto con el mismo nombre se le agrega la propiedad 'done' contraria a la que se tenga en taskItems
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const cleanTasks = () => {
    //seleccionamos las tareas que done es false, que aun faltan por hacer
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  //se ejecuta cuando carga la aplicaion
  useEffect(() => {
    //recuperamos las tareas del localStorage
    let data = localStorage.getItem("tasks");
    if (data) {
      //asignamos las tareas a tasksItems
      setTasksItems(JSON.parse(data));
    }
  }, []);

  //se ejecuta cuando cambia tasksItems
  useEffect(() => {
    //se gurada en localStorage el valor de tasksItems
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />

        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          isCheked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
