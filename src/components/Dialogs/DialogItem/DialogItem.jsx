import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path}  activeClassName={s.active}><div className={s.imageBlock}><img src={props.avatar} alt=""/></div> <span>{props.name}</span></NavLink>
        </div>
    )

}

export default DialogItem;