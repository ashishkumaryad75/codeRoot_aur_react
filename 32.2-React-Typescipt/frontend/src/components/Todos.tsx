import React from "react";
import Todo from "../models/todo.ts";


const  Todos:React.FC<{items:Todo[]}> = (props) =>{
    return (
      <>
        <ul>{props.items.map((item)=><li key={item.id}>{item.text}</li>)}
         
        </ul>
      </>
    );
  }
//   const  Todos:React.FC<{items:string[]}> = (props) =>{
//     return (
//       <>
//         <ul>{props.items.map((item)=><li key={item}>{item}</li>)}
         
//         </ul>
//       </>
//     );
//   }

export default Todos;
