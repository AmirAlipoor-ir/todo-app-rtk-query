import { useState } from "react";
import { useGetTodosQuery } from "./feature/todo/apiSlice";

function App() {
  const [title, setTitle] = useState([]);

  const { data, error, isLoading } = useGetTodosQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("")
  };

  return (
    <>
      <div>
        <h1>Add todo</h1>
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



        <h1>todo list</h1>
        <div>
          {data?.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
