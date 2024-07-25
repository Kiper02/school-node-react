import React, { useContext, useState } from 'react';
import styles from './Registration.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import InputEmailComponent from './UI/InputEmailComponent';
import InputPasswordComponent from './UI/InputPasswordComponent';
import ButtonLoginComponent from './UI/ButtonLoginComponent';
import useInput from '../../hooks/AuthHooks/useInput';
import useForm from '../../hooks/AuthHooks/useAuth';
import useValidation from '../../hooks/AuthHooks/useValidation';

const RegistrationComponent = () => {
    const emailInput = useInput('');
    const passwordInput = useInput('');
    const {showEye, toggleShowEye} = useForm();
    const {validate} = useValidation();
    const [serverError, setServerError] = useState('');

    const {user} = useContext(Context);
    const navigate = useNavigate();



    const handleSubmit = async () => {
        emailInput.setIsTouched(true);
        passwordInput.setIsTouched(true);
        const emailError = validate(emailInput.value);
        const passwordError = validate(passwordInput.value);

        emailInput.setError(emailError);
        passwordInput.setError(passwordError);


        if(emailError === '' && passwordError === '') {
            try {
                await user.registration(emailInput.value, passwordInput.value);
                navigate('/login')
            } catch (error) {
                setServerError(error?.message)
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
                    serverError={serverError}
                />
                {serverError && <p className={styles.server_error}>{serverError}</p>}
                <div className={styles.buttons_wrapp}>
                    <ButtonLoginComponent 
                        onClick={handleSubmit}
                        text='Зарегистрироваться'
                    />
                    <NavLink className={styles.btn_reg} to={'/profile'}>Войти</NavLink>
                </div>

                <NavLink className={styles.reset}>Забыли пароль?</NavLink>
            </div>
        </div>
    );
}

export default observer(RegistrationComponent);
