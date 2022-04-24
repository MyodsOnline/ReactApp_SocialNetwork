import React from "react";
import ds from "./../Dialogs.module.css";
import Incoming from "./Incoming";
import Sending from "./Sending";

const Messages = () => {
    return (
        <div className={ds.MessagesBox}>
            <Incoming />
            <Sending />
            <Sending />
            <Incoming />
            <Sending />
            <Incoming />
        </div>
    )
}

export default Messages