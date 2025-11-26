// useFetch

/**
 * Custom Hook per il fetch dei dati da un URL
 * @param url - L'URL da cui effettuare il fetch
 * @returns Un oggetto contenente i dati, lo stato del loading e l'eventuale errore
 */

import {useEffect, useState} from "react";

export default function useFetch<T>(url: string){
    // DATI
    const [data, setData] = useState<T>();
    // ERRORI
    const [error, setError] = useState<string>();
    // LOADING
    const [loading, setLoading] = useState<boolean>();

    async function getData(){
        setLoading(true);
        try{
            const res = await fetch(url);
            if (!res.ok){
                throw new Error("Errore nel recupero dei post");
            }
            const data: T = await res.json();
            setData(data);
        }catch(err: any){
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return{data, loading, error};
}