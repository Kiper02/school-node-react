import React from 'react';
import styles from './../Login.module.css';

const ButtonLoginComponent = ({text, onClick}) => {
    return (
        <button
            className={styles.btn_login}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default ButtonLoginComponent;
