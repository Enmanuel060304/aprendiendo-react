import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import InputForm from "./components/Input";
import Todos from "./components/Todos";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const onChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;

    const nuevoObjeto = {
      id: tasks.length + 1,
      nombre: newTask,
      completed: false,
    };

    setTasks([...tasks, nuevoObjeto]);
    setNewTask("");
  };

  const onClickButton = (id) => {
    const updateTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updateTask);
  };

  const onClickDelete = (id) => {
    const newData = tasks.filter((task) => task.id !== id);
    setTasks(newData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center justify-start p-8">
      <Header user={"Enmanuel Urbina"}>Esta es mi TodoApp</Header>
      <InputForm newTask={newTask} onChange={onChange} addTask={addTask} />
      <Todos
        tasks={tasks}
        onClickButton={onClickButton}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}

export default App;
