import { NavLink, Outlet } from "react-router-dom";
import cn from 'classnames';

import styles from "./Header.module.css";
import { useAuth } from "@features/authRouting/model/useAuth";

export const Header = () => {
    const { accessToken } = useAuth();

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
        {!accessToken && <NavLink to="/login" className={({isActive}) => cn([styles.link, {
            [styles.active]: isActive,
        }])}>
            Вход в профиль
        </NavLink>}
        {accessToken && <NavLink to="/profile" className={({isActive}) => cn([styles.link, {
            [styles.active]: isActive,
        }])}>
            Профиль
        </NavLink>}
        <NavLink to="/public" className={({isActive}) => cn([styles.link, {
            [styles.active]: isActive,
        }])}>
            Публичная страница
        </NavLink>
    </header>
    <main>
        <Outlet />
    </main>
</>
};