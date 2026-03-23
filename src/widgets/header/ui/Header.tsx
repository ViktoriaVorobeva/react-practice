import { NavLink, Outlet } from "react-router-dom";
import cn from 'classnames';

import styles from "./Header.module.css";

export const Header = () => {
    return <>
    <header className={styles.header}>
        <NavLink to="/" className={({isActive}) => cn([styles.link, {
            [styles.active]: isActive,
        }])}>
            Список задач
        </NavLink>
        <NavLink to="/register" className={({isActive}) => cn([styles.link, {
            [styles.active]: isActive,
        }])}>
            Форма регистрации
        </NavLink>
    </header>
    <main>
        <Outlet />
    </main>
</>
};