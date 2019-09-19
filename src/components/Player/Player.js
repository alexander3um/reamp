import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";
import {Display} from "./Display";
import {Playback} from "./Playback";
import {Buttons} from "./Buttons";
import {Progress} from "./Progress";
import {Volume} from "./Volume";
import {DND} from "./DND";
import {setDndWindowDisplay} from "../../actions/ui";
import {addTracksFromInput} from "../../actions/player";

export function Player() {
    const dispatch = useDispatch();
    const [{isOver}, drop] = useDrop({
        accept: NativeTypes.FILE,
        drop: (item, monitor) => {
            const extensions = /(\.mp3|\.wav)$/;
            for (let file of item.files) {
                if (!extensions.test(file.name)) {
                    return console.log('pizdec'); // todo: civilized error message
                }
            }
            dispatch(addTracksFromInput(item.files));
        },
        collect: (monitor) => {
            return {
                isOver: monitor.isOver()
            }
        }
    });

    useEffect(() => {
        dispatch(setDndWindowDisplay(isOver));
    }, [isOver]);

    return (
        <section className="player" ref={drop}>
            <Playback/>
            <Volume/>
            <div className="player__box">
                <DND/>
                <Display/>
                <Progress/>
                <Buttons/>
            </div>
        </section>
    );
}