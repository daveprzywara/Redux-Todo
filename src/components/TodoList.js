import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => (
  <React.Fragment>
    {props.todoArray.map((todo, index) => (
      <TodoItem key={index} handleRemove={props.handleRemove}>{todo}</TodoItem>
    ))}
  </React.Fragment>
);

// const mapStateToProps = state => {
//   return {
//     todoArray: state.todoArray
//   };
// }

export default TodoList;
