import React from "react";

 const TodoItem = props => 
     <ul>
     <li onClick={props.handleRemove} value={props.children}>{props.children} </li>
     </ul>
   ;

export default TodoItem;