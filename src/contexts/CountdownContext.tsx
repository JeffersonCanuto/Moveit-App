import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountDownContextData);

let countDownTimeOut: NodeJS.Timeout;

export function CountdownProvider({ children } : CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);
    
    const initialTime = 25 * 60;

    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(initialTime);
        setHasFinished(false);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countDownTimeOut = setTimeout(() => setTime(time - 1), 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);

            startNewChallenge();
        }
    }, [isActive, time]); 

    return (
        <CountdownContext.Provider 
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountDown,
                resetCountDown
            }}
        >
            {children}
        </CountdownContext.Provider>
    );
}