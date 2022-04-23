import React from "react";
import ds from "./Dialogs.module.css";
import DialogsList from "./DialogsList";
import Chat from "./Chats/Chat";

const Dialogs = () => {
    return (
        <section className={ds.dialogStyle}>
            <DialogsList />
            <Chat />
        </section>
    )
}

export default Dialogs