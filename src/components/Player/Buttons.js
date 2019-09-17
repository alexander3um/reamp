import React, {useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Slider from 'rc-slider';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faBackward, faForward, faPlus} from "@fortawesome/free-solid-svg-icons";
import {setPan, setAutoplay, nextTrack, prevTrack, playPause, addTracksFromInput} from "../../actions/player";

export function Buttons() {
    const dispatch = useDispatch();
    const {isPlaying, pan, autoplay, currentTrack, trackListLength} = useSelector(({player}) => ({
        isPlaying: player.isPlaying,
        pan: player.pan,
        autoplay: player.autoplay,
        currentTrack: player.currentTrack,
        trackListLength: player.trackList.length
    }));

    // todo: unplayable unless there's a track
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
            {/*<Slider className="player__pan slider slider--horizontal slider--pan" value={pan} min={-1} max={1} step={0.1} onChange={(value) => dispatch(setPan(value))}/>*/}
            {/*<input type="checkbox" name="autoplay" checked={autoplay} onChange={() => dispatch(setAutoplay(!autoplay))}/>*/}
            {/*<label htmlFor="autoplay" title="Starts playing stuff automatically when you add it, also switches tracks after when they end">Autoplay</label>*/}
        </div>
    );
}