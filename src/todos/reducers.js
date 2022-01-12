// a reducer is just a function named after whichever action type it's in charge of managing. 
// reducers take two arguments, 
// anytime an action is fired anywhere in our application, our reducer gets called.
// When this happens,the two arguments that will get passed to a reducer are the current state of whatever resource the reducer is managing and the second will be the action that was triggered, which will be an object with type and payload properties.
// So .... what reducers do is take the current state & the action that was triggered and decide what changes should occcur in the state as a result of this action.
// then it should return the updated state and Redux will take this returned value and set the current state to that.
import { CREATE_TODO, REMOVE_TODO } from "./actions";
export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text, 
            isComplete: false,
        };
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    default: 
        return state;
    }
}
