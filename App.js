import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      Consumo de API
      <ul>
        {!todos
          ? "Se esta cargando lka informacion de una API"
          : todos.map((todo, index) => {
              return (
                <li>
                  {todo.title}
                  {todo.completed ? "- ok" : "- bad"}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default App;
