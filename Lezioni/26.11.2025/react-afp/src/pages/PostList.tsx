import {useEffect, useState} from "react";
import type {IPost, TPosts} from "../core/models/Post.ts";

export default function PostList(){
    // DATI
    const [posts, setPosts] = useState<TPosts>([]);
    // ERRORI
    const [error, setError] = useState();
    // LOADING
    const [loading, setLoading] = useState(false);

    async function getPosts(){
        setLoading(true);
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok){
                throw new Error("Errore nel recupero dei post");
            }
            const data: TPosts = await res.json();

            const temp = data.filter((post: IPost) => post.userId === 1);

            setPosts(temp);
        }catch(err: any){
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) return <h3>Caricamento in corso</h3>
    if (error) return <h3>Si è verificato un errore: {error}</h3>

    return (
        <div>
            <h1>Post List Page</h1>
            <button onClick={getPosts}>Carica post</button>
            { posts.length === 0 && <p>Ancora nessun post disponibile</p> }
            <ul>
                {
                 posts.map((post: IPost) => {
                     return (
                         <li>{post.title}</li>
                     )
                 })
                }
            </ul>
        </div>
    )
}



