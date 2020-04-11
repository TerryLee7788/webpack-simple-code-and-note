import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const add = (a, b) => a + b;
// eslint-disable-next-line no-console
console.log(add(1, 2));


ReactDOM.render(
    <App />,
    document.querySelector('#app'),
);
