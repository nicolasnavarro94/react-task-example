import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title: title,
      descripcion: descripcion,
    });
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-800 p-10 mb-4">
        <h1 className="text-white mb-2 text-xl font-bold">Crear nueva tarea</h1>
      <input
        placeholder="Escribe una tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus={true}
      />
      <textarea
        placeholder="Descripcion"
        onChange={(e) => setDescripcion(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
        value={descripcion}
      ></textarea>
      <button className="bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-green-400 w-full text-white">Guardar Tarea</button>
    </form>
    </div>
  );
}

export default TaskForm;
