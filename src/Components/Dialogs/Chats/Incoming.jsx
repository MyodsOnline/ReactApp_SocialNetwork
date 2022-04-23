import React from "react";
import ds from "./../Dialogs.module.css";
import incUSer from './../../assets/img/user-1.jpeg'

const Incoming = () => {
    return (
        <div className={ds.IncomingStyle}>
            <img src={incUSer} alt="userimage"/>
            <p className={ds.IncomingStyleText}>Incoming messge text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo autem repudiandae? Sed velit magni nulla eligendi error quasi iusto vero fugiat quis, reiciendis repellendus adipisci corrupti nam dignissimos eum!</p>
        </div>
    )
}

export default Incoming