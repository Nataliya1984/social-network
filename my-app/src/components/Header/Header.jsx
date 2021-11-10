import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {

    return (
    <header className={classes.header}>
       <img src='https://cdn.pixabay.com/photo/2016/10/07/15/47/dragon-1721875__340.png' />
     </header>
    );
}

export default Header;