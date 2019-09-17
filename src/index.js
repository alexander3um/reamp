import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Application} from "./App";
import {store} from "./store";
import './css/main.scss';

ReactDOM.render((
    <Provider store={store}>
        <Application/>
    </Provider>
), document.querySelector('#app-root'), () => {
    console.log(`Loading's done`);
});