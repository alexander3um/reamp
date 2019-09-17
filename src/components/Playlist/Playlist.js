import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTrack} from "../../actions/player";

export function Playlist() {
    const dispatch = useDispatch();
    const {trackList, currentTrack} = useSelector(({player}) => ({
        trackList: player.trackList,
        currentTrack: player.currentTrack
    }));

    const trackListElements = trackList.map((track, index) => {
        const classes = ['playlist__track', index === currentTrack ? 'playlist__track--current' : null];
        return (
            <button className={classes.join(' ')} key={track.name} type="button" onClick={() => dispatch(setCurrentTrack(index))}>
                {track.name}
            </button>
        );
    });

    return (
        <section className="playlist box">
            {trackList.length > 0 ? trackListElements : <div className="playlist__empty">no tracks</div>}
        </section>
    );
}