import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {playbackProgress, setDuration, trackEnded} from "../../actions/player";

export function Playback() {
    const dispatch = useDispatch();
    const {isPlaying, currentTrack, volume, isMuted, lastTimeChange} = useSelector(({player}) => ({
        isPlaying: player.isPlaying,
        currentTrack: player.trackList[player.currentTrack],
        lastTimeChange: player.lastTimeChange,
        volume: player.volume,
        isMuted: player.isMuted
    }));

    const player = useRef(null);

    useEffect(() => {
        player.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        if (isMuted) {
            player.current.volume = 0;
        } else {
            player.current.volume = volume;
        }
    }, [isMuted]);

    useEffect(() => {
        if (currentTrack) {
            const currentTrackBlobURL = URL.createObjectURL(currentTrack);
            player.current.src = currentTrackBlobURL;
            return () => URL.revokeObjectURL(currentTrackBlobURL);
        }
        player.current.src = null;
    }, [currentTrack]);

    useEffect(() => {
        isPlaying ? player.current.play() : player.current.pause();
        return () => player.current.pause();
    }, [isPlaying, currentTrack]);

    useEffect(() => {
        player.current.currentTime = lastTimeChange;
    }, [lastTimeChange]);

    return <audio ref={player}
                  onDurationChange={e => dispatch(setDuration(e.target.duration))}
                  onEnded={e => dispatch(trackEnded())}
                  onTimeUpdate={e => dispatch(playbackProgress(e.target.currentTime))}/>;
}
