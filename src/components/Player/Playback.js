import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {playbackProgress, setDuration, trackEnded} from "../../actions/player";

export function Playback() {
    const dispatch = useDispatch();
    const {isPlaying, currentTrack, volume, isMuted, isCurrentTimeSynced, lastTimeChange, trackList, currentTrackNumber, autoplay, pan} = useSelector(({player}) => ({
        isPlaying: player.isPlaying,
        currentTrack: player.trackList[player.currentTrack],
        currentTrackNumber: player.currentTrack,
        trackList: player.trackList,
        isCurrentTimeSynced: player.isCurrentTimeSynced,
        lastTimeChange: player.lastTimeChange,
        volume: player.volume,
        isMuted: player.isMuted,
        pan: player.pan,
        autoplay: player.autoplay
    }));

    const player = useRef(null);
    // const [context] = useState(new AudioContext());
    // const [panner] = useState(new StereoPannerNode(context));

    // useEffect(() => {
    //     context.createMediaElementSource(player.current).connect(panner).connect(context.destination);
    // }, [true]);

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

    // useEffect(() => {
    //     panner.pan.value = pan; // блин, я знаю, что нельзя мутировать стейт без сетСтейт, но а как тут ещё это было сделать?
    // }, [pan]);

    useEffect(() => {
        if (currentTrack) {
            const currentTrackBlobURL = URL.createObjectURL(currentTrack);
            player.current.src = currentTrackBlobURL;
            return () => URL.revokeObjectURL(currentTrackBlobURL);
        }
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