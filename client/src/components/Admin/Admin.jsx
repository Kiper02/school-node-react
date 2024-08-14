import React, { useState } from 'react';
import styles from './Admin.module.css'
import ModalAdmin from './Modal/ModalAdmin';


const Admin = () => {
    const [modal, setModal] = useState(false);
    const [type, setType] = useState('');
    
    const clickSetType = (type) => {
        setType(type);    
    } 

    const clickModal = (type) => {
        clickSetType(type);
        setModal(true);
    }


    return (
        <div className={styles.wrapp}>
            <div className={styles.create} onClick={() => clickModal('task')}>
                <h4>Создать задачу</h4>
            </div>

            <div className={styles.create}>
                <h4>Создать администратора</h4>
            </div>

            <div className={styles.create}>
                <h4>Создать теорию</h4>
            </div>

            <div className={styles.create}>
                <h4>Создать достижение</h4>
            </div>
            {modal && <ModalAdmin type={type}/>}
        </div>
    );
}

export default Admin;
