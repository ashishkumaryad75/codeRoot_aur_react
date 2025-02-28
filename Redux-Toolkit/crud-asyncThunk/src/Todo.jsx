import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "./features/todoSliceReducer.jsx";

function Todo() {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <div>
      <h1>Hi Redux</h1>
      {todoData.loading ? (
        <h3>Loading...</h3>
      ) : (
        todoData.data.map((todo) => {
          return <ul key={todo.id}>{todo.title}</ul>;
        })
      )}
    </div>
  );
}

export default Todo;
