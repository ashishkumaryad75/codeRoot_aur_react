import React, { useContext } from "react";
import TodoItem from "./TodoItem.tsx";
import classes from './Todos.module.css'
import { TodosContext } from "../store/todos-Context.tsx";


const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <>
      {/* <ul>{props.items.map((item)=><li key={item.id}>{item.text}</li>)} */}
      {/* </ul> */}
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}/>
        ))}
      </ul>
    </>
  );
};
//   const  Todos:React.FC<{items:string[]}> = (props) =>{
//     return (
//       <>
//         <ul>{props.items.map((item)=><li key={item}>{item}</li>)}

//         </ul>
//       </>
//     );
//   }

export default Todos;
