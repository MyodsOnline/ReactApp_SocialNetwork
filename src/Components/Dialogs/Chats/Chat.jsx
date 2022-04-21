import React from "react";
import ds from "./../Dialogs.module.css";
import Incoming from "./Incoming";
import Sending from "./Sending";

const Chat = () => {
    return (
        <div className={ds.ChatStyle}>
            <Incoming />
            <Sending />
            <Sending />
            <Incoming />
            <Sending />
        </div>
    )
}

export default Chat