import { AuthProvider } from '@features/authRouting/AuthContext'
import './App.css'
import { Router } from './router'

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
