import { useRef, useState } from "react";

interface ITimeoutData {
    timerId: number | undefined;
    valueWithTimer: string;
}

export const DebouncedLogger = () => {
    const [value, setValue] = useState('');
    const timeoutRef = useRef<ITimeoutData>({
        valueWithTimer: '',
        timerId: undefined
    });

    const handleChange = (currentValue: string) => {
        clearTimeout(timeoutRef.current.timerId);
        timeoutRef.current.valueWithTimer += currentValue.charAt(currentValue.length-1);

        timeoutRef.current.timerId = setTimeout(() => {
            setValue((prevValue) =>  prevValue + timeoutRef.current.valueWithTimer)
            timeoutRef.current.valueWithTimer = '';
        }, 1000);
    }

    return <input type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
}