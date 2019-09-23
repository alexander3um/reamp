import React from 'react';
import {useSelector} from "react-redux";

export function Display(props) {
    const {currentTrack, currentTrackNumber} = useSelector(({player}) => ({
        currentTrack: player.trackList[player.currentTrack],
        currentTrackNumber: player.currentTrack
    }));

    return (
        <div className="player__display">
            <div className="player__title">{currentTrack ? currentTrack.name : 'no track'}</div>
            <div className="player__track-number">{currentTrack ? `Track #${currentTrackNumber + 1}` : 'use the add button or drag something here'}</div>
        </div>
    );
}
