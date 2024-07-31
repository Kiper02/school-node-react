import React, { useContext } from 'react';
import styles from './ExperienceBar.module.css'
import { Context } from '../../index';

const ExperienceBarComponent = ({ currentExp, maxExp }) => {





    const percentage = (currentExp / maxExp) * 100;
    return (
        <div className={styles.experience_bar}>
            <div className={styles.experience_bar_inner} style={{ width: `${percentage}%` }}>
            </div>
        </div>
    );
}

export default ExperienceBarComponent;
