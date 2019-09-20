import {batch} from "react-redux";

export const ADD_TRACK = 'ADD_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const ADD_TRACKS = 'ADD_TRACKS';
export const REMOVE_TRACKS = 'REMOVE_TRACKS';
export const SET_PLAYBACK = 'SET_PLAYBACK';
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_DURATION = 'SET_DURATION';
export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
export const SYNC = 'SYNC';
export const UNSYNC = 'UNSYNC';
export const SET_MUTED = 'SET_MUTED';
export const SET_PAN = 'SET_PAN';
export const SET_AUTOPLAY = 'SET_AUTOPLAY';

export const setMuted = (payload) => ({type: SET_MUTED, payload});
export const setVolume = (payload) => ({type: SET_VOLUME, payload});
export const setCurrentTime = (payload) => ({type: SET_CURRENT_TIME, payload});
export const sync = () => ({type: SYNC});
export const unsync = () => ({type: UNSYNC});
export const setAutoplay = (payload) => ({type: SET_AUTOPLAY, payload});
export const setCurrentTrack = (payload) => ({type: SET_CURRENT_TRACK, payload});
export const setDuration = (payload) => ({type: SET_DURATION, payload});
export const setPan = (payload) => ({type: SET_PAN, payload});

export const playPause = () => (dispatch, getState) => {
    const {player} = getState();
    if (player.currentTrack !== null) {
        dispatch({type: SET_PLAYBACK, payload: !player.isPlaying});
    }
};

export const addTracksFromInput = (files) => (dispatch, getState) => batch(() => {
    const {player} = getState();
    dispatch({type: ADD_TRACKS, payload: Array.from(files)});
    if (player.currentTrack === null) {
        dispatch({type: SET_CURRENT_TRACK, payload: 0});
    }
    if (player.autoplay && !player.isPlaying) {
        dispatch({type: SET_PLAYBACK, payload: true});
    }
});

export const removeTrack = (payload) => (dispatch, getState) => batch(() => {
    dispatch({type: REMOVE_TRACK, payload});
    if (getState().player.trackList.length < 1) {
        dispatch({type: SET_CURRENT_TRACK, payload: null});
        dispatch({type: SET_PLAYBACK, payload: false});
    }
});

export const nextTrack = () => (dispatch, getState) => batch(() => {
    const {player} = getState();
    if (player.currentTrack === (player.trackList.length - 1)) {
        return dispatch({type: SET_PLAYBACK, payload: false});
    }
    dispatch({type: SET_CURRENT_TRACK, payload: player.currentTrack + 1});
});

export const prevTrack = () => (dispatch, getState) => batch(() => {
    const {player} = getState();
    if (player.currentTrack === 0) {
        return dispatch({type: SET_PLAYBACK, payload: false});
    }
    dispatch({type: SET_CURRENT_TRACK, payload: player.currentTrack - 1});
});

export const playbackProgress = (payload) => (dispatch, getState) => {
    if (getState().player.isCurrentTimeSynced) {
        dispatch({type: SET_CURRENT_TIME, payload});
    }
};

export const trackEnded = () => (dispatch, getState) => batch(() => {
    if (!getState().player.autoplay) {
        dispatch({type: SET_PLAYBACK, payload: false});
    }
    dispatch(nextTrack());
});