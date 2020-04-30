import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";


const Dialogs  = (props) => {

    let dialogs =[
        { id:"1",name:"Alex" },
        { id:"2",name:"Vetal"},
        {id:"3",name:"Nastish"},
        {id:"4",name:"Viktor"},
        {id:"5",name:"Mushket"},
        {id:"6",name:"Muskin"}
    ];

    let messages =[
        { id:"1", message:"Hi" },
        { id:"2", message:"How is your lessons IT-camasutra"},
        { id:"3", message:"Tell me about you progress, pls"},
        { id:"4", message:"Hi"},
        { id:"5", message:"Hi"},
        { id:"6", message:"Hi"}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );

    let messagesElements = messages.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;