import React, {useRef, useEffect} from 'react';
import {useSelector} from "react-redux";
import {Display} from "./Display";
import {Playback} from "./Playback";
import {Buttons} from "./Buttons";
import {Progress} from "./Progress";
import {Volume} from "./Volume";
import {DND} from "./DND";

export function Player() {
    return (
        <section className="player">
            <Playback/>
            <Volume/>
            <div className="player__box">
                <Display/>
                <Progress/>
                <Buttons/>
            </div>
        </section>
    );
}