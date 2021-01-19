import React from 'react';
import classcss from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={classcss.nav}>
            <div className={classcss.item}>
                <NavLink to='/profile' activeClassName={classcss.activeLink} >Profile</NavLink>
            </div>
            <div className={`${classcss.item} ${classcss.active}`}>
                <NavLink to='/dialogs' activeClassName={classcss.activeLink} >Messages</NavLink>
            </div>
            <div className={classcss.item}>
                <NavLink to='/news' activeClassName={classcss.activeLink} >News</NavLink>
            </div>
            <div className={classcss.item}>
                <NavLink to='/music' activeClassName={classcss.activeLink} >Music</NavLink>
            </div>
            <div className={classcss.item}>
                <NavLink to='/settings' activeClassName={classcss.activeLink} >Settings</NavLink>
            </div>
            <div className={classcss.item}>
                <NavLink to='/users' activeClassName={classcss.activeLink} >Users</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;