import { useGetUserQuery } from "@features/authRouting/api/authApi";
import { useAuth } from "@features/authRouting/model/useAuth";
import { Button } from "@shared/ui"
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
    const navigate = useNavigate();

    const {data, isLoading, isError} = useGetUserQuery();
    
    const {logout} = useAuth();

    const handleLogout = () => {
        logout();

        navigate('/login', { replace: true })
    };

    return <>
        <h1>Профиль</h1>
        <Button onClick={handleLogout}>Выйти</Button>

        {isLoading && <p>Загрузка пользователя</p>}
        {isError && <p>Не удалось загрузить пользователя</p>}

        {!isLoading && data && <p>Привет, {data}</p>}
    </>
}