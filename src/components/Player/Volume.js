import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Slider from 'rc-slider';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp, faVolumeMute} from "@fortawesome/free-solid-svg-icons";
import {setMuted, setVolume} from "../../actions/player";


export function Volume() {
    const dispatch = useDispatch();
    const {volume, isMuted} = useSelector(({player}) => ({
        volume: player.volume,
        isMuted: player.isMuted
    }));

    return (
        <div className="player__volume-box">
            <Slider className="slider slider--volume slider--vertical" vertical value={volume} max={1} step={0.01} onChange={(value) => dispatch(setVolume(value))}/>
            <button type="button" className="player__volume-icon" onClick={e => dispatch(setMuted(!isMuted))}>
                {!isMuted ? <FontAwesomeIcon icon={faVolumeUp}/> : <FontAwesomeIcon icon={faVolumeMute}/>}
            </button>
        </div>
    );
}
