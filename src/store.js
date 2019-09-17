import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {player} from "./reducers/player";
import {ui} from "./reducers/ui";

export const store = createStore(
    combineReducers({
        player, ui
    }),
    applyMiddleware(thunk)
);