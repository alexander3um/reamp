import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {removeTrack, setCurrentTrack} from "../../actions/player";

export function Playlist() {
    const dispatch = useDispatch();
    const {trackList, currentTrack} = useSelector(({player}) => ({
        trackList: player.trackList,
        currentTrack: player.currentTrack
    }));

    const trackListElements = trackList.map((track, index) => {
        const classes = ['playlist__track', index === currentTrack ? 'playlist__track--current' : null];
        return (
            <div className={classes.join(' ')} key={track.name}>
                <button className="playlist__track-button" type="button" onClick={e => dispatch(setCurrentTrack(index))}>{track.name}</button>
                <button className="playlist__track-remove" type="button" onClick={e => dispatch(removeTrack(index))}><FontAwesomeIcon icon={faTimes}/></button>
            </div>
        );
    });

    return (
        <section className="playlist box">
            {trackList.length > 0 ? trackListElements : <div className="playlist__empty">no tracks</div>}
        </section>
    );
}