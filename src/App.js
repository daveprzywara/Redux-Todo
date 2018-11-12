import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { connect } from "react-redux";
// import * as actionTypes from './store/actions';
// import { handleChange } from './store/actions';
import * as actionCreators from './store/actions';

class App extends Component {
  // state = {
  //     value: "",
  //     todoArray: []
  //   };

  handleChange = event => {
    // this.setState({ value: event.target.value });
    this.props.onHandleChange(event.target.value);
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     value: "",
  //     todoArray: [...this.state.todoArray, this.state.value]
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onHandleSubmit(this.props.value);
  };

  // clearTodo = event => {
  //   let newArray = [...this.state.todoArray];
  //   let todoIndex = newArray.indexOf(event.target.value);
  //   newArray.splice(todoIndex, 1);
  //   this.setState({todoArray: newArray});
  // }

  handleRemove = event => {
    this.props.onHandleRemove(event.target.getAttribute("value"));
  };

  render() {
    return (
      <div className="App">
        <TodoInput
          value={this.props.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todoArray={this.props.todoArray}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    value: state.value,
    todoArray: state.todoArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleChange: value =>
      dispatch(actionCreators.handleChange(value)),
    onHandleSubmit: value =>
      dispatch(actionCreators.handleSubmit(value)),
    onHandleRemove: value =>
      dispatch(actionCreators.handleRemove(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
