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
            </Route>
        </Routes>
  </BrowserRouter>
}