import {ADD_MESSAGE, REMOVE_MESSAGE, SET_DND_WINDOW_DISPLAY, SET_TITLE} from "../actions/ui";

const defaults = {
    title: null,
    baseTitle: 'Reamp',
    isDndWindowOpen: false,
    messages: []
};

export function ui(state = defaults, action) {
    switch (action.type) {
        case SET_TITLE:
            return {...state, title: action.payload};
        case SET_DND_WINDOW_DISPLAY:
            return {...state, isDndWindowOpen: action.payload};
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]};
        case REMOVE_MESSAGE:
            return {...state, messages: state.messages.filter((message, index) => index !== action.payload)};
        default:
            return state;
    }
}