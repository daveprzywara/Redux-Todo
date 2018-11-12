import * as actionTypes from './actionTypes';

const initialState = {
  value: "",
  todoArray: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_CHANGE:
      return {
        ...state,
        value: action.payload
      };
    case actionTypes.HANDLE_SUBMIT:
      return {
        ...state,
        value: "",
        todoArray: [...state.todoArray, action.payload]
      };
    case actionTypes.HANDLE_REMOVE:
      const updatedArray = state.todoArray.filter(todo => todo !== action.payload);
      return {
        ...state,  
        todoArray: updatedArray
      }
    default:
      return state;
  }
};

export default reducer;
