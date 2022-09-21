import {
    ADD_TODO,
    COMPLETE_TODO,
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
    DELETE_TODO,
    UPDATE_TODO
} from "./actionTypes";
//counter app
export const counterInc =()=> ({ type: INCREMENT_COUNTER });
export const counterDec =()=> ({ type: DECREMENT_COUNTER });

//todo app
export const todoAdd = (payload) => ({ type: ADD_TODO,payload });
export const todoDelete = (id) => ({ type: DELETE_TODO,payload:id });
export const todoComplete = (id) => ({ type: COMPLETE_TODO, payload: id });
export const todoUpdate = (updateTodo) => ({ type: UPDATE_TODO,payload:updateTodo });