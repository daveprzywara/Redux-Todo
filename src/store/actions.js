import * as actionTypes from './actionTypes';

export const handleChange = (value) => {
    setTimeout(() => {

    }, 2000);
    return{
        type: actionTypes.HANDLE_CHANGE,
        payload: value
    };
};

export const handleSubmit = (value) => {
    return{
        type: actionTypes.HANDLE_SUBMIT,
        payload: value
    };
};

export const handleRemove = (value) => {
    return{
        type: actionTypes.HANDLE_REMOVE,
        payload: value
    };
};