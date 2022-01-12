import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem';
import './TodoList.css'

//we make todos=[] as a default, so we wont get an error.
const TodoList = ({ todos = [{text: 'hello'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;