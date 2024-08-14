import React, { useEffect } from 'react';
import styles from './ModalAdmin.module.css'

const ModalAdmin = (type) => {
    

    const createData = async() => {

    }

    const fetchData = async() => {

    }

    useEffect(() => {
       fetchData();
    }, []);


    return (
        <div className={styles.wrapp}>
            <input className={styles.input}/>
            <input className={styles.input}/>
            <input className={styles.input}/>
        </div>
    );
}

export default ModalAdmin;
