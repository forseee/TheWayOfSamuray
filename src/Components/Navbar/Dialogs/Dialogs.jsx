import React from 'react';
import clascss from './Dialogs.module.css'
import DialogItems from './DialogItems/DialogItems'
import MessageItems from './MessageItems/MessageItems'

function Dialogs(props) {
    let dialogElemets = props.state.dialogs.map(d => <DialogItems id={d.id} name={d.name} />)

    let messageElements = props.state.messages.map(m => <MessageItems message={m.message} />)

    function sendMessage(){
        props.dispatch(addPostActionCreator())  
    }

    function onMessageChange() {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))

    }

    return (
        <div className={clascss.dialogs}>
            <div className={clascss.dialogItems}>
                {dialogElemets}
            </div>
            <div className={clascss.messages}>
                <div>
                    {messageElements}
                
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Отправить сообщение</button>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;