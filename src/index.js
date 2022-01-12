import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import App from './App.js';

// here we are rendering out App component into the root div in our index.html file. 
ReactDOM.render(
    <Provider store={configureStore()}>
    <App />
    </Provider>,
    document.getElementById('root'),
);

