import React, { useContext, useEffect, useState } from 'react';
import styles from './Theory.module.css'
import { Context } from './../../index'
import { useNavigate, useParams } from 'react-router-dom';

const Theory = () => {
    const {tasks} = useContext(Context)
    const {id} = useParams();
    const [theory, setTheory] = useState(null)

    const fetchTheories = async () => {
        const data = await tasks.getTheoryOne(id);
        setTheory(data);
    }

    useEffect(() => {
        fetchTheories();
    }, [])

    return (
        <div className={styles.wrapp}>
            {tasks.theories 
                ? (
                    theory.map(item =>
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.text}</p>
                        </div>      
                    )
                )
                : (
                    <h2>Загрузка</h2>
                )
            }
        </div>
    );
}

export default Theory;
