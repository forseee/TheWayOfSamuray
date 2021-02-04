import React from 'react';
import { NavLink } from 'react-router-dom';
import classcss from './Header.module.css';

const Header = (props) =>  {
    return (

        <header className={classcss.header}>
            <img src='https://avatanplus.com/files/resources/mid/5815dbd5106d21581562b84b.png' />

            <div className={classcss.loginBlock}>
                {props.isAuth ?
                    props.login
                    :<NavLink to={'./login'}>Login</NavLink>
                }

            </div>

        </header>

    )
}

export default Header