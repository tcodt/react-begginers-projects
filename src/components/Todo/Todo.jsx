import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="New todo"
            className="outline-none border-2 border-slate-300 rounded py-1 px-3 focus:border-blue-500 text-base font-medium text-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 py-1 px-3 rounded-full text-white font-medium text-lg cursor-pointer ms-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {todos.map(({ text, id }) => (
            <li
              className="p-2 rounded bg-slate-200 flex items-center justify-between"
              key={id}
            >
              <span>{text}</span>
              <button className="cursor-pointer" onClick={() => removeTodo(id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
