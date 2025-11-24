import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Login from "./pages/Login.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> |{' '}
                <Link to="/dashboard">Dashboard</Link> |{' '}
                <Link to="/login">Login</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* fallback 404 route */}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}