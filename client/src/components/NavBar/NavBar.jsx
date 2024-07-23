import React, { useContext } from 'react';
import { Context } from '../../index';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <header className={styles}>
            <nav>
                <ul className={styles.navbar}>
                    <li className={styles.nav_item}>
                        <NavLink to='/'>Школа</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
} 

export default NavBar;
