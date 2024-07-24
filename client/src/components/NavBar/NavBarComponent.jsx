import React, { useContext } from 'react';
import { Context } from '../../index';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBarComponent = () => {
    const {user} = useContext(Context)
    return (
        <header className={styles.header}>
            <ul className={styles.navbar}>
                <li className={styles.nav_item}>
                    <NavLink className={styles.link} to='/map'>Карта</NavLink>
                </li>
                <li className={styles.nav_item}>
                    <NavLink className={styles.link} to='/tasks'>Задачи</NavLink>
                </li>
            </ul>
        </header>
    );
} 

export default NavBarComponent;
