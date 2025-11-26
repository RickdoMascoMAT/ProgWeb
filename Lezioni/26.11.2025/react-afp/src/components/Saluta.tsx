import type { JSX } from "react";

interface ISalutaProp {
    nome: string;
    cognome: string;
    eta?: number;
    email?: string;
    cf: string;
    studente?: boolean
}

function Saluta({nome, cognome, cf, eta, email}: ISalutaProp){

    function checkCF(): JSX.Element{
        if(!(cf.length === 16)) return (<p>CF non valido</p>);
        
        // tantissimissimi congtrolli 

        return (<p>CF valido: {cf}</p>);
    }
    
    return (
        <div>
            <h1>Ciao a {nome} {cognome}</h1>
            {/* <h2>CF: {cf}</h2> */}
            <p>Anni: {eta}</p>

            {checkCF()}

            {email !== undefined ? 
                (<p>Email Presente: {email}</p>) : 
                (<p>Email non presente</p>)
            }
        </div>
    );
}

export default Saluta;