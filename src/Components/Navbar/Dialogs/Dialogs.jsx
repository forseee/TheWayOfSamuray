import React from 'react';
import clascss from './Dialogs.module.css'
import DialogItems from './DialogItems/DialogItems'
import MessageItems from './MessageItems/MessageItems'

function Dialogs(props) {
    let dialogElemets = props.state.dialogs.map(d => <DialogItems id={d.id} name={d.name} />)

    let messageElements = props.state.messages.map(m => <MessageItems message={m.message} />)

    return (
        <div className={clascss.dialogs}>
            <div className={clascss.dialogItems}>
                {dialogElemets}
            </div>
            <div className={clascss.messages}>
                {messageElements}
            </div>

            <div>
                <div>
                    <textarea />
                </div>
                <div>
                    <button >Отправить сообщение</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;