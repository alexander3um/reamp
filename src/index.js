import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {DndProvider} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';
import {Application} from "./App";
import {store} from "./store";
import './css/main.scss';

ReactDOM.render((
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <Application/>
        </DndProvider>
    </Provider>
), document.querySelector('#app-root'), () => {
    console.log(`Loading's done`);
});