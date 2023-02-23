export const VisibilityControl = ({
  isCheked,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it")) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary align-items-center">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          name="showTasks"
          checked={isCheked}
          onChange={(e) => setShowCompleted(e.target.checked)}
          className="form-check-input"
        />
        <label htmlFor="showTasks"> Show Tasks Done</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        clear
      </button>
    </div>
  );
};
