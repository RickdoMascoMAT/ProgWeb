import {useEffect, useState} from "react";
import type {Item, Skyblock} from "../core/models/Post.ts";

//https://transform.tools/json-to-typescript

export default function PostList(){
    const [posts, setPosts] = useState<Skyblock>({

    } as Skyblock);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);



    async function getPosts(){
        setLoading(true);
        try{
            setCounter(counter + 1);
            const res = await fetch(`https://api.hypixel.net/v2/resources/skyblock/items`);
            if (!res.ok){
                throw new Error("Errore nel recupero dei Post");
            }

            const data: Item = await res.json();
            setPosts(data);
        }catch(error: any){
            setError(error.message);
            setPosts([]);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if(loading) return <h3>Caricamento in corso...</h3>;
    if(error) return <h3>{error}...</h3>

    return(
        <div>
            <h1>{counter}</h1>
            <h1>PostList Page</h1>
            <button onClick={getPosts}> Update </button>
            {/*{posts.items.length === 0 && <p>Ancora nessun post disponibile</p> }*/}
            <ul>
                {
                    posts.items.map((post: Item) => {
                        return (
                            <li>{post.name}</li>
                        )
                    })
                }
                {/*{*/}
                {/*    posts.items && <li>{JSON.stringify(posts.items[0])}</li>*/}
                {/*}*/}
            </ul>
        </div>
    )
}