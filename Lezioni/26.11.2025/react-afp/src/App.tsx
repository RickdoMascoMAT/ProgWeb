import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import PostList from "./pages/PostList.tsx";
import ListaUtenti from "./pages/ListaUtenti.tsx";

function App(){

  return (
      <>
          <BrowserRouter>
              <nav>
                  <Link to='/home'>Home</Link>
                  <Link to='/dashboard'>Dashboard</Link>
                  <Link to='/login'>Login</Link>
                  <Link to='/profile'>Profile</Link>
                  <Link to='/profile/pietro'>Pit</Link>
                  <Link to='/posts'>Posts</Link>
                  <Link to='/ListaUtenti'>ListaUtenti</Link>
              </nav>

              <Routes>
                  <Route path='/home' element={<Home/>} />
                  <Route path='/dashboard' element={<Dashboard/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/profile' element={<Profile/>} />
                  <Route path='/profile/:userName' element={<Profile/>} />
                  <Route path='/posts' element={<PostList/>} />
                  <Route path='/ListaUtenti' element={<ListaUtenti/>} />
                  <Route path='/*' element={<PageNotFound/>} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;