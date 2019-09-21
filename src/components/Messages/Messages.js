import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {removeMessage} from "../../actions/ui";

export function Messages() {
    const dispatch = useDispatch();
    const {messages} = useSelector(({ui}) => ({messages: ui.messages}));

    const messagesElement = messages.map((message, index) => (
        <div className="messages__message" key={message}>
            <span>{message}</span>
            <button className="messages__message-close" type="button" onClick={e => dispatch(removeMessage(index))}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </div>
    ));

    return <div className="messages">{messagesElement}</div>;
}