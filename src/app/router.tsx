import { LoginPage } from "@pages/LoginPage"
import { ProfilePage } from "@pages/ProfilePage"
import { ProtectedRoute } from "@pages/ProtectedRoute"
import { PublicPage } from "@pages/PublicPage"
import RegisterPage from "@pages/RegisterPage"
import TaskPage from "@pages/TaskPage"
import { Header } from "@widgets/header"
import { Route, Routes, BrowserRouter } from "react-router-dom"

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" index element={<TaskPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/public" element={<PublicPage />} />
            </Route>
        </Routes>
  </BrowserRouter>
}