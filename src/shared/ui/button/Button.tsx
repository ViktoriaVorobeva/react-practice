import cn from "classnames";
import type React from "react";
import styles from './Button.module.css';

interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'delete';
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
}

export function Button ({ children, onClick, color = 'primary', type, disabled}: IButtonProps) {
    return (
        <button type={type || 'button'} disabled={disabled} onClick={onClick} className={cn([styles.button, {
            [styles.primary]: color === 'primary',
            [styles.delete]: color === 'delete',
            [styles.disabled]: disabled,
        }])}>
            {children}
        </button>
    )
}