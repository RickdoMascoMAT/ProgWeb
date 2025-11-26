import useFetch from "../core/hook/useFetch.ts";
import type { TPosts } from "../core/models/Post.ts";
import type {TUtenti, IUtente} from "../core/models/TUtenti.ts";

export default function ListaUtenti(){
    const {data: dataU, loading: loadingU, error: errorU} = useFetch<TUtenti>(`https://jsonplaceholder.typicode.com/users`);
    const {data: dataP, loading: loadingP, error: errorP} = useFetch<TPosts>(`https://jsonplaceholder.typicode.com/posts`);

    if (loadingU) return <h3>Caricamento utenti...</h3>
    if (loadingP) return <h3>Caricamento post...</h3>
    if (errorU) return <h3>Si è verificato un ERRORE negli utenti! {errorU}</h3>
    if (errorP) return <h3>Si è verificato un ERRORE nei post! {errorU}</h3>
    return(
        <div>
            <h1>Lista Utenti Page</h1>
            <ul>
                {dataU && dataU.map((u: IUtente)=>{
                    return (
                        <li key={u.id}>
                            {u.id}: {u.name};
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}