import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeOpenedModal } = useContext(ChallengesContext);
    
    return (
        <div className={styles.overlay}>
            <div className={styles.LevelUpModalContainer}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível.</p>

                <button type="button" onClick={closeOpenedModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    );
}