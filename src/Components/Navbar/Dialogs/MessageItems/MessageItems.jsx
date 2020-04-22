import React from 'react';
import clascss from './../Dialogs.module.css'


function MessageItems(props) {
    return (
        <div className={clascss.dialog}>
            {props.message}
        </div>
    )
}
export default MessageItems;