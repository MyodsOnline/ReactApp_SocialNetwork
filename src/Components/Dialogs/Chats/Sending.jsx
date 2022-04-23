import React from "react";
import ds from "./../Dialogs.module.css";
import sendUSer from "./../../assets/img/user-3.jpeg"

const Sending = () => {
    return (
        <div className={ds.SendingStyle}>
            <img src={sendUSer} alt="userimage"/>
            <p className={ds.SendingStyleText}>Incoming messge text. Lorem ipsum dolor sit amet!</p>
        </div>
    )
}

export default Sending