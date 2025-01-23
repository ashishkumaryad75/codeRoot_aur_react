import React from "react";
import Todo from "../models/todo.ts";
import TodoItem from "./TodoItem.tsx";
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[]; onRemoveTodo:(id:string)=>void }> = (props) => {
  return (
    <>
      {/* <ul>{props.items.map((item)=><li key={item.id}>{item.text}</li>)} */}
      {/* </ul> */}
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}/>
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
