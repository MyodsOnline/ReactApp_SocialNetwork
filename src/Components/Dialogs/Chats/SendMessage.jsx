import React from 'react'
import df from "./../Dialogs.module.css";

const SendMessage = () => {
    return (
        <div className={df.SendForm}>
            <input type="text" placeholder="Type your message" />
            <span className={df.SendFormBtn}>
                <button type="button">Send</button>
            </span>
        </div>
    )
}

export default SendMessage