import { useAuth } from '@features/authRouting/model/useAuth';
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRoute = () => {
    const {accessToken} = useAuth();

    return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
}