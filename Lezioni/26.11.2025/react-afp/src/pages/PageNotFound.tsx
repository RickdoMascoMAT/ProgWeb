import {useNavigate} from "react-router-dom";

export default function PageNotFound() {
    const nav = useNavigate();

    return (
        <>
            <h1>YO sta pagina non c'è!</h1>
            <button
                onClick={() => nav('/home')}
            >Back to Home</button>
        </>
    );
}