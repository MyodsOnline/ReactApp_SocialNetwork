import React from "react";
import { NavLink } from "react-router-dom";
import ds from "./Dialogs.module.css";

import UserPhoto from "./../assets/img/user-3.jpeg";

const DialogsListItem = (props) => {
    let path = "./" + props.dLink;
    return (
        <NavLink to={path}>
            <div className={ds.DialogsListItemStyle}>
                <img src={UserPhoto} alt="user" />
                <div className={ds.DialogData}>
                    <div className={ds.DialogDataHeader}>
                        <h5>{props.contactName}</h5>
                        <span>16</span>
                    </div>
                    <div className={ds.DialogDataText}>
                        <p>DialogsListItem DialogsListItem DialogsListItem</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default DialogsListItem