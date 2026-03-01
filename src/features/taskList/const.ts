import type { ITask } from "@entities/task";
import { nanoid } from "nanoid";

export const INITIAL_TASKS: ITask[] = [
    { 
        id: nanoid(), 
        title: "Сделать дз", 
        completed: true 
    },
    { 
        id: nanoid(), 
        title: "Полить цветы", 
        completed: false 
    },
    { 
        id: nanoid(), 
        title: "Пройти урок английского", 
        completed: false 
    },
    { 
        id: nanoid(), 
        title: "Прочитать главу книги", 
        completed: true 
    },
    { 
        id: nanoid(), 
        title: "Купить кроссовки", 
        completed: true
    },
];