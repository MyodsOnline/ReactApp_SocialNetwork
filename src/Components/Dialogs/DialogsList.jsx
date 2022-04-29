import React from "react";
import ds from "./Dialogs.module.css";
import DialogsListItem from "./DialogsListItem";

const DialogsList = () => {

    let dialogData = [
        {dLink: 1, contactName: "User Profile Name"},
        {dLink: 2, contactName: "Marianna Gerasimova"},
        {dLink: 3, contactName: "Alexandr Nedovesov"}
    ]

    let dialogItem = dialogData.map( dialog => <DialogsListItem contactName={dialog.contactName} dLink={dialog.dLink} key={dialog.dLink} />)

    return (
        <div className={ds.DialogsListStyle}>
            { dialogItem }
        </div>
    )
}

export default DialogsList