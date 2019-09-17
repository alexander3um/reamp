import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Playlist} from "./components/Playlist/Playlist";
import {Player} from "./components/Player/Player";

export function Application() {
    const {title, baseTitle} = useSelector(state => ({title: state.ui.title, baseTitle: state.ui.baseTitle}));

    useEffect(() => {
        document.title = title ? `${title} ${baseTitle}` : baseTitle;
    }, [title]);

    return (
        <section className="window">
            <Player/>
            <Playlist/>
        </section>
    );
}