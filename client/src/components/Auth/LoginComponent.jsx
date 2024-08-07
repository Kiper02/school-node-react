import React, { useContext, useEffect, useState } from 'react';
import styles from './Login.module.css'
import { NavLink,useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import InputEmailComponent from './UI/InputEmailComponent';
import InputPasswordComponent from './UI/InputPasswordComponent';
import ButtonLoginComponent from './UI/ButtonLoginComponent';
import useInput from '../../hooks/AuthHooks/useInput';
import useValidation from '../../hooks/AuthHooks/useValidation';
import useForm from '../../hooks/AuthHooks/useAuth';

const LoginComponent = () => {
    const emailInput = useInput('');
    const passwordInput = useInput('');
    const {validate} = useValidation();
    const {showEye, toggleShowEye} = useForm();
    


    const navigate = useNavigate();
    const {user} = useContext(Context)
    useEffect(() => {
        if(user.isAuth) {
            navigate('/profile')
        }
    }, [user.isAuth, navigate])
    

    const handleSubmit = () => {
        emailInput.setIsTouched(true);
        passwordInput.setIsTouched(true);
        const emailError = validate(emailInput.value);
        const passwordError = validate(passwordInput.value);

        emailInput.setError(emailError);
        passwordInput.setError(passwordError);


        if(emailError === '' && passwordError === '') {
            try {
                user.login(emailInput.value, passwordInput.value);
                navigate('/profile')              
            } catch (error) {
                console.log(error);
            }

        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.form_wrapp}>
                <h1 className={styles.heading}>Добро пожаловать</h1>
                <InputEmailComponent 
                    placeholder='E-mail'
                    value={emailInput.email}
                    onChange={emailInput.handleChange}
                    onBlur={emailInput.handleBlur}
                    errorEmail={emailInput.error}
                />              
                <InputPasswordComponent 
                    placeholder='Пароль'
                    value={passwordInput.value}
                    onChange={passwordInput.handleChange}
                    onBlur={passwordInput.handleBlur}
                    clickEye={toggleShowEye}
                    errorPassword={passwordInput.error}
                />
                <div className={styles.buttons_wrapp}>
                    <ButtonLoginComponent 
                        onClick={handleSubmit}
                        text='Войти'
                    />
                    <NavLink className={styles.btn_reg} to={'/registration'}>Регистрация</NavLink>
                </div>
                <NavLink className={styles.reset}>Забыли пароль?</NavLink>
            </div>
        </div>
    );
}

export default observer(LoginComponent);
