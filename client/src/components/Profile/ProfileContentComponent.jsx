import React, { useContext, useEffect } from 'react';
import styles from './ProfileContent.module.css'
import profile from './../../assets/profile.png'
import RadarChartComponent from './RadarChartComponent';
import ExperienceBarComponent from './ExperienceBar/ExperienceBarComponent';
import WeeklyExpChartComponent from './WeeklyExpChart/WeeklyExpChartComponent';
import { Context } from '../../index';
import { jwtDecode } from 'jwt-decode';
import { observer } from 'mobx-react-lite';



const ProfileContentComponent = () => {
    const {user, tasks} = useContext(Context)

    console.log(user.isAuth);

    const expData = [10, 20, 20, 0, 50, 60, 70];

    const token = localStorage.getItem('token')
    const dataUser = jwtDecode(token);
    
    const fetchUserInfo = async () => {
        await user.getInfo(dataUser.id);
        await tasks.getTasksAll();
    }

    useEffect(() => {
        if(dataUser.id) {
            fetchUserInfo()
           
        }
    }, [dataUser.id])

    const currentExp = user.info.exp; 
    const maxExp = 100;
    const lvl = user.info.lvl
    const {firstname, surname} = user.info;


    return (
        <div className={styles.wrapp}>
            <div className={styles.content_wrapp}>
                <div className={styles.profile}>
                    <img width={180} height={180} src={profile} />
                    <h4>{firstname}@{surname}.school.com</h4>
                    <div className={styles.info_lvl}>
                        <p className={styles.lvl}>уровень {lvl}</p>
                        <p>{currentExp}%</p>
                    </div>
                    <ExperienceBarComponent currentExp={currentExp} maxExp={maxExp} />
                    <h4 className={styles.header_dot}>Точки</h4>
                    <div className={styles.dot}>
                        <p className={styles.dotexp}>0 exp</p>
                        <p className={styles.dotmany}>0 монет</p>
                    </div>
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

export default observer(ProfileContentComponent);
