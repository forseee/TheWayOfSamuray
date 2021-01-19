import React from 'react';
import clascss from './Dialogs.module.css'
import DialogItems from './DialogItems/DialogItems'
import MessageItems from './MessageItems/MessageItems'


function Dialogs(props) {

    let dialogElemets = props.state.dialogs.map(d => <DialogItems id={d.id}
        key={d.id} name={d.name} />)

    let messageElements = props.state.messages.map(m => <MessageItems key={m.id} message={m.message} />)

    let newMessageBody = props.state.newMessageBody;

    function sendMessage() {
        props.sendMassageCreator()
    }

    function onMessageChange(e) {
        let bady = e.target.value;
        props.updateNewMessageBadyCreator(bady);

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
                            <textarea placeholder='Enter you message'
                                onChange={onMessageChange}
                                value={newMessageBody} />
                        </div>
                        <div>
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;