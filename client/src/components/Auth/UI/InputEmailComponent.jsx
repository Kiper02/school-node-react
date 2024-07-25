import React from 'react';
import styles from './../Login.module.css'

const InputEmailComponent = ({placeholder, value, onChange, onBlur, errorEmail}) => {
    return (
        <div className={errorEmail ? styles.input_container_error : styles.input_container}>
            <input 
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {errorEmail && <p className={styles.error}>{errorEmail}</p>}
        </div>           
    );
}

export default InputEmailComponent;
