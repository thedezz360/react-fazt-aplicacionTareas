import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

	const taskTableRows = (doneValue)=>{

		return (
			//filtramos las tareas con 'done'
			tasks
			.filter(task=> task.done === doneValue)
			.map((task) => (
				<TaskRow key={task.name} task={task} toggleTask={toggleTask} />
			))
		)
	}

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <td>Task</td>
        </tr>
      </thead>
      <tbody>
        {
					taskTableRows(showCompleted)
				}
      </tbody>
    </table>
  );
};
