import React from 'react';
// hot loader allows us to load our app just like nodemon. 
import { hot } from 'react-hot-loader';
import './App.css';
import TodoList from './todos/TodoList';

const App = () => (
    <div className='App'>
       <TodoList />
    </div>
);
//here we export the default component using the hot module. Used for seeing any changes we make in the browser without hitting refresh.
export default hot(module)(App);
