export const SET_TITLE = 'SET_TITLE';
export const SET_DND_WINDOW_DISPLAY = 'SET_DND_WINDOW_DISPLAY';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const setTitle = (payload) => ({type: SET_TITLE, payload});
export const setDndWindowDisplay = (payload) => ({type: SET_DND_WINDOW_DISPLAY, payload});
export const addMessage = (payload) => ({type: ADD_MESSAGE, payload});
export const removeMessage = (payload) => ({type: REMOVE_MESSAGE, payload});