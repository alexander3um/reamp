import React from 'react';
import ReactDOM from 'react-dom';
import {Application} from "./App";
import './css/main.scss';

ReactDOM.render(<Application/>, document.querySelector('#app-root'), () => {
    console.log(`Loading's done`);
});