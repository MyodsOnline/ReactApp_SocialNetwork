import React from "react";
import ds from "./../Dialogs.module.css";
import SendMessage from "./SendMessage";
import Messages from "./Messages";

const Chat = () => {
    return (
        <div className={ds.ChatStyle}>
            <Messages />
            <SendMessage />
        </div>
    )
}

export default Chat