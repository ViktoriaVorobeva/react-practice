import { Button } from "@shared/ui";
import { useRef } from "react";

interface IClickData {
    prevFocusInput: HTMLInputElement | null;
    clickCount: number;
}

export const FocusTracker = () => {
    const firstInputRef = useRef<HTMLInputElement>(null);
    const secondInputRef = useRef<HTMLInputElement>(null);
    const clickDataRef = useRef<IClickData>({
        prevFocusInput: null,
        clickCount: 0,
    });

    const handleClick = () => {
        if(firstInputRef.current) {
            firstInputRef.current.focus();
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.relatedTarget && clickDataRef.current.prevFocusInput !== event.target) {
            if(clickDataRef.current.prevFocusInput !== null) {
                clickDataRef.current.clickCount += 1;

                console.log('переход фокуса между полями:', clickDataRef.current.clickCount);
            }
            clickDataRef.current.prevFocusInput = event.target;
        }
    };

    return <>
        <input ref={firstInputRef} type="text" onFocus={handleFocus} />
        <input ref={secondInputRef} type="text" onFocus={handleFocus} />
        <Button color='primary' onClick={handleClick}>Сфокусировать на первом</Button>
    </>
}