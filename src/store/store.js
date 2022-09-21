import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";

const rootreducer = combineReducers({
    counter: counterReducer,
    todo:todoReducer
})

export const store = legacy_createStore(rootreducer);