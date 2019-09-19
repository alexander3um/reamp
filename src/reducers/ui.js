import {SET_DND_WINDOW_DISPLAY, SET_TITLE} from "../actions/ui";

const defaults = {
    title: null,
    baseTitle: 'Reamp',
    isDndWindowOpen: false
};

export function ui(state = defaults, action) {
    switch (action.type) {
        case SET_TITLE:
            return {...state, title: action.payload};
        case SET_DND_WINDOW_DISPLAY:
            return {...state, isDndWindowOpen: action.payload};
        default:
            return state;
    }
}