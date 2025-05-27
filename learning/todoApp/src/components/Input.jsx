
const InputForm = ({newTask, onChange, addTask}) => 
    <form onSubmit={addTask} className="flex gap-4 mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={newTask}
          onChange={onChange}
          className="flex-1 px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Agregar
        </button>
      </form>


export default InputForm;