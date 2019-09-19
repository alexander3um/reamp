import {
    SET_CURRENT_TRACK,
    SET_VOLUME,
    SET_DURATION,
    SET_CURRENT_TIME,
    SET_PAN,
    SYNC,
    UNSYNC,
    SET_AUTOPLAY,
    SET_MUTED,
    ADD_TRACK,
    ADD_TRACKS,
    REMOVE_TRACK,
    REMOVE_TRACKS,
    SET_PLAYBACK
} from "../actions/player";

const defaults = {
    trackList: [],
    autoplay: true,
    isPlaying: false,
    volume: 1,
    pan: 0,
    isMuted: false,
    currentTrack: null,
    currentTime: 0,
    isCurrentTimeSynced: true,
    lastTimeChange: 0,
    duration: 0
};

export function player(state = defaults, action) {
    switch (action.type) {
        case ADD_TRACK:
            return {...state, trackList: [...state.trackList, action.payload]};
        case ADD_TRACKS:
            return {...state, trackList: [...state.trackList, ...action.payload]};
        case REMOVE_TRACK:
            return {...state, trackList: state.trackList.filter((track, index) => index !== action.payload)};
        case REMOVE_TRACKS:
            return {...state, trackList: state.trackList.filter((track, index) => action.payload.includes(index))};
        case SET_PLAYBACK:
            return {...state, isPlaying: action.payload};
        case SET_CURRENT_TRACK:
            return {...state, isPlaying: state.autoplay, currentTrack: action.payload};
        case SET_VOLUME:
            return {...state, volume: action.payload};
        case SET_PAN:
            return {...state, pan: action.payload};
        case SET_DURATION:
            return {...state, duration: action.payload};
        case SET_CURRENT_TIME:
            return {...state, currentTime: action.payload};
        case SET_MUTED:
            return {...state, isMuted: action.payload};
        case SYNC:
            return {...state, isCurrentTimeSynced: true, lastTimeChange: state.currentTime};
        case UNSYNC:
            return {...state, isCurrentTimeSynced: false};
        case SET_AUTOPLAY:
            return {...state, autoplay: action.payload};
        default:
            return state;
    }
}