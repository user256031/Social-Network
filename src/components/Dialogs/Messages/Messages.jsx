import React from "react";
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

export default Messages