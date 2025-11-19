import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("submit");

        navigate(`/dashboard`,{
            state: { username: username }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>username: {username}</p>
        </form>
    )
}
