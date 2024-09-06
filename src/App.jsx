import { useGetTodosQuery } from "./feature/todo/apiSlice";

function App() {
  const { data, error, isLoading } = useGetTodosQuery();
  console.log(data);

  return (
    <>
      <div>
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
