import { useContext} from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountDown, 
        resetCountDown 
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = minutes.toString().padStart(2, '0').split('');
    const [secondLeft, secondRight]= seconds.toString().padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished && (
                    <button 
                        disabled
                        className={styles.countDownButton}
                    >
                        Ciclo encerrado
                        <span className="checkmark"></span>
                    </button> 
                )
            }
            {isActive && !hasFinished ? (
                    <button 
                        type="button" 
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                        onClick={resetCountDown}
                    >
                        Abandonar ciclo
                    </button>
                ) : !isActive && !hasFinished ?
                (
                    <button 
                        type="button" 
                        className={styles.countDownButton}
                        onClick={startCountDown}
                    >
                        Iniciar um ciclo
                    </button>
                ) :
                    null
            }   
        </div>
    );
}