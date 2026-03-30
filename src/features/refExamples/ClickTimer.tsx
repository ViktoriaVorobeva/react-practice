import { Button } from "@shared/ui";
import { useCallback, useRef } from "react";

interface IClickData {
    startTime: number | null;
    clickCount: number;
}

export const ClickTimer = () => {
    const clickDataRef = useRef<IClickData>({
        startTime: null,
        clickCount: 0,
    });

    const handleClick = useCallback(() => {
        if(clickDataRef.current.clickCount === 0) {
            clickDataRef.current.startTime = Date.now();
        }

        clickDataRef.current.clickCount += 1;

        const time = Date.now() - (clickDataRef.current.startTime || 0);
     
        console.log('разницу между текущим временем и временем первого клика:', time);
        console.log('общее количество кликов:', clickDataRef.current.clickCount);
    }, []);

    return <Button color='primary' onClick={handleClick}>Клик</Button>
}