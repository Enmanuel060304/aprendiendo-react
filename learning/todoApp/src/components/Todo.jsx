const Todo = ({ tasks, onClickButton, onClickDelete }) => {
  const buttonshow = (value) => (value ? "completada" : "completar");

  return (
    <li
      key={tasks.id}
      className="bg-gray-100 p-3 rounded-lg shadow-sm flex items-center justify-between"
    >
      <span className={tasks.completed ? "line-through text-gray-500" : ""}>
        {tasks.nombre}
      </span>
      <div className="ml-auto flex gap-x-2">
        <button
          onClick={() => onClickButton(tasks.id)}
          className={`px-3 py-1 text-sm rounded-md transition ${
            tasks.completed
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
        >
          {buttonshow(tasks.completed)}
        </button>
        <button
          onClick={() => onClickDelete(tasks.id)}
          className="text-red-600 hover:text-red-800 font-bold"
        >
          ✖
        </button>
      </div>
    </li>
  );
};

export default Todo;
