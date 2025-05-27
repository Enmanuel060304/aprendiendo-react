import Todo from "./Todo";

const Todos = ({ tasks, onClickButton, onClickDelete }) => {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Lista de tareas
      </h2>
      {tasks.length === 0 ? (
        <span> No hay tareas pendiente</span>
      ) : (
        <ul>
          {tasks.map((task) => (
            <Todo
              tasks={task}
              onClickButton={onClickButton}
              onClickDelete={onClickDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
