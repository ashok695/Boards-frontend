import './App.css'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/Login'
import ProjectPage from './pages/Projects'
import BoardsPage from './pages/Boards'
import { Routes,Route } from "react-router"
import SignUpPage from './pages/Signup'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/projects" element={<ProjectPage />} />
    <Route path="/boards" element={<BoardsPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
