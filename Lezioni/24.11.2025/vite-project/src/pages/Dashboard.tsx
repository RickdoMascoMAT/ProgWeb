import {useLocation, type Location, useNavigate} from "react-router-dom";
import type {ILoginNavigateState} from "./Login.tsx";
import {useEffect} from "react";

export default function Dashboard() {
    const navigate = useNavigate();

    const location:Location<ILoginNavigateState> = useLocation();
    const username = location.state?.username ?? "Guest";

    useEffect(() => {
        if (!location.state) navigate("/login");
    }, [location, navigate]);

    function handleLogout() {
        console.log("Logout clicked");
        navigate(`/login`,{
            state: { username: username }
        });
    }

    return (
        <form onSubmit={handleLogout}>
            <h1>Benvenuto {username}</h1>
            <button onClick={handleLogout}>Logout</button>ciao :)
        </form>
    );
}