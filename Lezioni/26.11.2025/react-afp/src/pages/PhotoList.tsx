import {useQuery} from "@tanstack/react-query";

export default function PhotoList(){
    const {data, isLoading, error} = useQuery({
        queryKey: [`Photos`],
        queryFn: async() => await fetch(`https://jsonplaceholder.typicode.com/photos`).then(data => data.json())
    });

    if(isLoading) return <h3>isLoading</h3>
    if(error) return <h3>error</h3>
    return (
        <div>
            <h1>PhotoList</h1>
            {data && data.map(p=>{
                return (
                    <div>
                        <h4>{p.title}</h4>
                        <img src={p.thumbnailUrl} alt={p.title}></img>
                    </div>
                )
            })}
        </div>
    )
}