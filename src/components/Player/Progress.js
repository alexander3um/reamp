import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Slider from 'rc-slider';
import {setCurrentTime, sync, unsync} from "../../actions/player";

export function Progress() {
    const dispatch = useDispatch();
    const {currentTime, duration} = useSelector(({player}) => ({
        currentTime: player.currentTime,
        duration: player.duration
    }));

    return (
        <div className="player__progress">
            <Slider className="slider slider--progress slider--horizontal" max={duration} value={currentTime}
                    onBeforeChange={() => dispatch(unsync())}
                    onChange={(value) => dispatch(setCurrentTime(value))}
                    onAfterChange={() => dispatch(sync())}/>
        </div>
    );
}