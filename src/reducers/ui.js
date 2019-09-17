import {SET_TITLE} from "../actions/ui";

const defaults = {
    title: null,
    baseTitle: 'Reamp'
};

export function ui(state = defaults, action) {
    switch (action.type) {
        case SET_TITLE:
            return {...state, title: action.payload};
        default:
            return state;
    }
}