import React, { useContext, useState } from 'react';
import styles from './Login.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import eye from './../../assets/eye.svg'
import eyeClose from './../../assets/eyeClose.svg'
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const RegistrationComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showEye, setShowEye] = useState(false);
    const [isTouchedEmail, setIsTouchedEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [isTouchedPassword, setIsTouchedPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState('');

    const {user} = useContext(Context);
    const navigate = useNavigate();



    const clickEye = () => {
        setShowEye(!showEye);
    }

    const handleErrorEmail = (e) => {
        setEmail(e.target.value)
        if(isTouchedEmail && e.target.value.trim() === '') {
            setErrorEmail('Это поле обязательно');
        } else {
            setErrorEmail('');
        }
    }

    const handleErrorPassword = (e) => {
        setPassword(e.target.value)
        if(isTouchedPassword && e.target.value.trim() === '') {
            setErrorPassword('Это поле обязательно');
        } else {
            setErrorPassword('');
        }
    }

    const handleEmailBlur = () => {
        setIsTouchedEmail(true);
        if(email.trim() === '') {
            setErrorEmail('Это поле обязательно');
        } else {
            setErrorEmail('');
        }
    }

    const handlePasswordBlur = () => {
        setIsTouchedPassword(true);
        if(password.trim() === '') {
            setErrorPassword('Это поле обязательно');
        } else {
            setErrorPassword('')
        }
    }

    const handleSubmit = () => {
        setIsTouchedEmail(true);
        setIsTouchedPassword(true);
        if(email.trim() === '') {
            setErrorEmail('Это поле обязательно');
        }
        if(password.trim() === '') {
            setErrorPassword('Это поле обязательно');
        }

        if(email.trim() !== '' && password.trim() !== '') {
            user.registration(email, password);
            navigate('/login')
        }
    }



    return (
        <div className={styles.body}>
            <div className={styles.form_wrapp}>
                <h1 className={styles.heading}>Добро пожаловать</h1>
                <div className={errorEmail ? styles.input_container_error : styles.input_container}>
                    <input 
                        placeholder='E-mail'
                        className={styles.input}
                        value={email}
                        onChange={handleErrorEmail}
                        onBlur={handleEmailBlur}
                    />
                    {errorEmail && <p className={styles.error}>{errorEmail}</p>}
                </div>                
                <div className={errorPassword ? styles.input_container_error : styles.input_container}>
                    <div className={styles.pass}>
                        <input 
                            placeholder='Пароль'
                            className={styles.input}
                            value={password}
                            onChange={handleErrorPassword}
                            onBlur={handlePasswordBlur}
                            type={showEye ? 'text' : 'password'}
                        />
                        {errorPassword && <p className={styles.error}>{errorPassword}</p>}
                        <img onClick={clickEye} className={styles.img} src={showEye  ? eye : eyeClose}/>
                    </div>
                </div>
                <div className={styles.buttons_wrapp}>
                <button
                        className={styles.btn_login}
                        onClick={handleSubmit}
                    >
                        Зарегистрироваться
                    </button>
                    <NavLink className={styles.btn_reg} to={'/profile'}>Войти</NavLink>
                </div>

                <NavLink className={styles.reset}>Забыли пароль?</NavLink>
            </div>
        </div>
    );
}

export default observer(RegistrationComponent);
