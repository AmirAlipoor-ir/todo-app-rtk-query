import { useState } from "react";
import { useAddTodosMutation, useGetTodosQuery } from "./feature/todo/apiSlice";

function App() {
  const [title, setTitle] = useState([]);

  const { data, error, isLoading } = useGetTodosQuery();
  const [createTodo] = useAddTodosMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
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
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <button onClick={()=> handleDelete(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
