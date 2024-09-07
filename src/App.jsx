import { useState } from "react";

import {
  useAddTodosMutation,
  useDeleteTodosMutation,
  useGetTodosQuery,
  useUpdateTodosMutation,
} from "./services/todos";

function App() {
  const [title, setTitle] = useState([]);

  const { data, error, isLoading } = useGetTodosQuery();
  const [createTodo] = useAddTodosMutation();
  const [deleteTodo] = useDeleteTodosMutation();
  const [toggleId] = useUpdateTodosMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };
  const handleToggleId = (id, completed) => {
    console.log(completed);
    toggleId({ id, completed: !completed });
  };

  return (
    <div>
      <h2>Add todo</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit">add todo</button>
        </form>
      </div>

      <h3>todo list</h3>
      <div className="todos">
        {data?.map(({ id, title, completed }) => {
          return (
            <div key={id} className={`${completed&& "completed"}`}>
              <p>{title}</p>
              <input
                type="checkbox"
                onChange={() => handleToggleId(id, completed)}
                checked={completed}
              />
              <button onClick={() => deleteTodo(id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
