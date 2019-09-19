import React from 'react';
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointDown} from "@fortawesome/free-solid-svg-icons";

export function DND() {
    const {isDisplaying} = useSelector(({ui}) => ({
        isDisplaying: ui.isDndWindowOpen
    }));

    if (!isDisplaying) {
        return null;
    }

    return (
        <div className="dnd player__dnd">
            <div>
                <FontAwesomeIcon icon={faHandPointDown}/>
                <span>Drop a dope set of music here</span>
            </div>
        </div>
    );
}