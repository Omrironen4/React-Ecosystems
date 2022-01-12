import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

//here all of our reducers will go 
const reducers = {
    todos,
};

// this const will take our reducers and insert them into the combined reducers, which puts our reducers into a form that we can pass to te create strore function that we imported.
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);