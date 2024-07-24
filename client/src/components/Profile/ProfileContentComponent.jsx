import React, { useContext, useEffect } from 'react';
import styles from './ProfileContent.module.css'
import profile from './../../assets/profile.png'
import RadarChartComponent from '../RadarChartComponent';
import ExperienceBarComponent from '../ExperienceBar/ExperienceBarComponent';
import WeeklyExpChartComponent from '../WeeklyExpChart/WeeklyExpChartComponent';
import { Context } from '../../index';
import { jwtDecode } from 'jwt-decode';



const ProfileContentComponent = () => {
    const currentExp = 0; // текущий опыт
    const maxExp = 100;    // максимальный опыт

    const expData = [10, 20, 20, 0, 50, 60, 70];
    const {user} = useContext(Context)

    const token = localStorage.getItem('token')
    const dataUser = jwtDecode(token);
    
    const fetchUserInfo = async () => {
        await user.getInfo(dataUser.id);
    }

    useEffect(() => {
        if(dataUser.id) {
            fetchUserInfo()
           
        }
    }, [dataUser.id])



    return (
        <div className={styles.wrapp}>
            <div className={styles.content_wrapp}>
                <div className={styles.profile}>
                    <img width={180} height={180} src={profile} />
                    <ExperienceBarComponent currentExp={currentExp} maxExp={maxExp} />
                </div>

                <div className={styles.info}>
                        <div className={styles.skills}>
                            <h3>Навыки</h3>
                            <div className={styles.skills_info}>
                                <RadarChartComponent />
                            </div>
                        </div>
                        <div className={styles.schedule}>
                            <h3>Опыт</h3>
                            <div className={styles.schedule_info}>
                                <WeeklyExpChartComponent expData={expData} />
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    );
}

export default ProfileContentComponent;
