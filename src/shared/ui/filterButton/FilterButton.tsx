import type { IOption } from "@shared/model/types";
import styles from './FilterButton.module.css';

interface IFilterButtonProps {
    options: IOption[];
    value: string;
    onSelect: (value: string) => void;
}

export function FilterButton({options, value, onSelect}: IFilterButtonProps) {
    return (
        <label>
            Фильтр: 
            <select className={styles.filter} name="filter" value={value} onChange={e => onSelect(e.target.value)}>
                {options.map((option) => {
                    return <option key={option.key} value={option.value}>{option.label}</option>
                })}
            </select>
        </label>
    )
}