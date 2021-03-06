import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    const dialogs = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Andry'},
        {id: 3, name: 'Petr'}
    ];

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: '1231231231'},
        {id: 3, message: 'asdasdasdas'}
    ];

    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = messages.map(m => <Message message={m.message}/>)

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