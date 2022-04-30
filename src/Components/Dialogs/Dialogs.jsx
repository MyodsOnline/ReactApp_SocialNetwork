import React from "react";
import ds from "./Dialogs.module.css";
import DialogsList from "./DialogsList";
import Chat from "./Chats/Chat";

const Dialogs = ({data}) => {
    console.log(data)
    return (
        <section className={ds.dialogStyle}>
            <DialogsList data={data}/>
            <Chat />
        </section>
    )
}

export default Dialogs