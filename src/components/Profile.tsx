import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext); 
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/JeffersonCanuto.png" alt="Jefferson Canuto"/>
            <div>
                <strong>Jefferson Canuto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>  
    );
}