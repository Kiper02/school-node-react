import React, { useState } from 'react';
import styles from './Login.module.css'
import { NavLink } from 'react-router-dom';
import eye from './../../assets/eye.svg'
import eyeClose from './../../assets/eyeClose.svg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showEye, setShowEye] = useState(false);

    const clickEye = () => {
        setShowEye(!showEye);
    }


    return (
        <div className={styles.body}>
            <div className={styles.form_wrapp}>
                <h1 className={styles.heading}>Добро пожаловать</h1>
                <input 
                    placeholder='E-mail'
                    className={styles.input}
                />
                <div className={styles.pass}>
                    <input 
                        placeholder='Пароль'
                        className={styles.input}
                    />
                    <img onClick={clickEye} className={styles.img} src={showEye  ? eye : eyeClose}/>
                </div>
                <div className={styles.buttons_wrapp}>
                    <NavLink className={styles.btn_login} to={'/profile'}>Войти</NavLink>
                    <NavLink className={styles.btn_reg} to={'/registration'}>Регистрация</NavLink>
                </div>

                <NavLink className={styles.reset}>Забыли пароль?</NavLink>
            </div>
        </div>
    );
}

export default Login;
