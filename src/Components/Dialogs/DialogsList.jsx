import React from "react";
import ds from "./Dialogs.module.css";
import DialogsListItem from "./DialogsListItem";

const DialogsList = ({data}) => {

    let dialogItem = data.map( dialog => <DialogsListItem contactName={dialog.contactName} dLink={dialog.dLink} key={dialog.dLink} />)

    return (
        <div className={ds.DialogsListStyle}>
            { dialogItem }
        </div>
    )
}

export default DialogsList