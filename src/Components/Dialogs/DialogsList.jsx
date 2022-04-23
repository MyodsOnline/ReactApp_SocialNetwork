import React from "react";
import ds from "./Dialogs.module.css";
import DialogsListItem from "./DialogsListItem";

const DialogsList = () => {
    return (
        <div className={ds.DialogsListStyle}>
            <DialogsListItem />
            <DialogsListItem />
            <DialogsListItem />
        </div>
    )
}

export default DialogsList