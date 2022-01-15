// here we will be making the Action type object
export const CREATE_TODO = 'CREATE_TODO';
// instead of creating a create todo object, we will create a function that takes the payload as a parameter. In our case the 'text'.
// Every time our user will create a new todo, this will take in the data
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

//Used for when our user will remove a todo
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});



