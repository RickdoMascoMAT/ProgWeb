import {useEffect, useState} from "react";

export default function Timer(){
    const [sec, setSec] = useState<number>(0);

    useEffect(() => {

        const timerId =
            setInterval(() => {
                setSec(s => s + 1);
            }, 1000);

        return () => clearInterval(timerId);
    }, [sec]);

    return <p>Secondi: {sec}</p>
}