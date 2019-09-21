import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Playlist} from "./components/Playlist/Playlist";
import {Player} from "./components/Player/Player";
import {Messages} from "./components/Messages/Messages";

export function Application() {
    const dispatch = useDispatch();
    const {title, baseTitle} = useSelector(state => ({title: state.ui.title, baseTitle: state.ui.baseTitle}));

    useEffect(() => {
        document.title = title ? `${title} ${baseTitle}` : baseTitle;
    }, [title]);

    return (
        <section className="window">
            <Messages/>
            <Player/>
            <Playlist/>
        </section>
    );
}