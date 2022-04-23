import React from "react";
import ds from "./Dialogs.module.css";

import UserPhoto from "./../assets/img/user-3.jpeg";

const DialogsListItem = () => {
    return (
        <div className={ds.DialogsListItemStyle}>
            <img src={UserPhoto} alt="user" />
            <div className={ds.DialogData}>
                <div className={ds.DialogDataHeader}>
                    <h5>Contact Name</h5>
                    <span>16</span>
                </div>
                <div className={ds.DialogDataText}>
                    <p>DialogsListItem DialogsListItem DialogsListItem</p>
                </div>
            </div>
        </div>
    )
}

export default DialogsListItem