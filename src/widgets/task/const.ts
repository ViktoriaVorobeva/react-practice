import type { IOption } from "@shared/model/types";
import { nanoid } from "nanoid";

export const FILTER_OPTIONS: IOption[] = [
    {
        key: nanoid(),
        value: 'all',
        label: 'Все'
    },
    {
        key: nanoid(),
        value: 'completed',
        label: 'Выполненные'
    },
    {
        key: nanoid(),
        value: 'incomplete',
        label: 'Невыполненные'
    },
];