import TaskPage from "@pages/TaskPage"
import { Route, Routes, BrowserRouter } from "react-router-dom"

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskPage />} />
        </Routes>
  </BrowserRouter>
}