import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faBackward, faForward, faPlus} from "@fortawesome/free-solid-svg-icons";
import {nextTrack, prevTrack, playPause, addTracksFromInput} from "../../actions/player";

export function Buttons() {
    const dispatch = useDispatch();
    const {isPlaying} = useSelector(({player}) => ({isPlaying: player.isPlaying}));

    return (
        <div className="player__buttons-box">
            <button className="player__button player__button--add" type="button">
                <FontAwesomeIcon icon={faPlus}/>
                <input type="file" accept="audio/*" multiple onChange={e => dispatch(addTracksFromInput(e.target.files))}/>
            </button>
            <div className="player__buttons">
                <button className="player__button player__button--backward" type="button" onClick={e => dispatch(prevTrack())}>
                    <FontAwesomeIcon icon={faBackward}/>
                </button>
                <button className="player__button player__button--play-pause" type="button" onClick={e => dispatch(playPause())}>
                    {!isPlaying ? <FontAwesomeIcon icon={faPlay}/> : <FontAwesomeIcon icon={faPause}/>}
                </button>
                <button className="player__button player__button--forward" type="button" onClick={e => dispatch(nextTrack())}>
                    <FontAwesomeIcon icon={faForward}/>
                </button>
            </div>
        </div>
    );
}
