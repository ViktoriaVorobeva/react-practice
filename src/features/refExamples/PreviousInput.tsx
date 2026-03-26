import { useEffect, useRef, useState } from "react"

export const PreviousInput = () => {
    const [value, setValue] = useState('');
    const prevTextRef = useRef<string>('');

    useEffect(() => {
        prevTextRef.current = value;
    }, [value]);

    return <>
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
        <p>Предыдущее значение: {prevTextRef.current}</p>
    </>
}