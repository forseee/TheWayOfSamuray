import React from 'react';
import clascss from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


function DialogItems(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${clascss.dialog} + '' + ${clascss.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItems;