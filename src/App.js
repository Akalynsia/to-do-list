import React, { useEffect, useState } from "react";

// todos endpoint'inden tüm todo'ları getirin ve todo bileşeninde görüntüleyin
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos
export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Failed to fetch data", error));
  }, []);

  return (
    <div className="flex justify-center flex-col items-center py-8">
      <h1 className="text-2xl font-bold pb-4">Yapılacaklar Listem</h1>
      <div className="space-y-5">
        {todos && todos.length > 0 ? (
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <p>No todos found</p>
        )}
      </div>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id={`completed-${todo.id}`}
          name={`completed-${todo.id}`}
          type="checkbox"
          defaultChecked={todo.completed}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <div className="font-medium text-gray-900">{todo.title}</div>
      </div>
    </div>
  );
}
