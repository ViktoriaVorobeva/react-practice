import cn from "classnames";
import type React from "react";
import styles from './Button.module.css';

interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'delete'
}

export function Button ({ children, onClick, color = 'primary'}: IButtonProps) {
    return (
        <button onClick={onClick} className={cn([styles.button, {
            [styles.primary]: color === 'primary',
            [styles.delete]: color === 'delete',
        }])}>
            {children}
        </button>
    )
}