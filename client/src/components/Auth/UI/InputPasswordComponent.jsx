import React from 'react';
import styles from './../Login.module.css';
import eye from './../../../assets/eye.svg'
import eyeClose from './../../../assets/eyeClose.svg'

const InputPasswordComponent = ({placeholder, value, onChange, onBlur, showEye, clickEye, errorPassword}) => {
    return (
        <div className={errorPassword ? styles.input_container_error : styles.input_container}>
            <div className={styles.pass}>
                <input 
                    placeholder={placeholder}
                    className={styles.input}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={showEye ? 'text' : 'password'}
                />
                {errorPassword && <p className={styles.error}>{errorPassword}</p>}
                <img onClick={clickEye} className={styles.img} src={showEye  ? eye : eyeClose}/>
            </div>
        </div>
    );
}

export default InputPasswordComponent;
