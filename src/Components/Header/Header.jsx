import React from 'react';
import classcss from './Header.module.css';

function Header(){
    return (
    <header className={classcss.header}>
        <img src='https://avatanplus.com/files/resources/mid/5815dbd5106d21581562b84b.png'/>
    </header>
    )     
}

export default Header;