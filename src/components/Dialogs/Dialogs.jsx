import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () =>{
        props.sendMessage();
    };

    let onNewMessageClick = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={'Enter your message'}
                                   value={newMessageBody}
                                   onChange={onNewMessageClick}/>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;