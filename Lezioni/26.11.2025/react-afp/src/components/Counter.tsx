import { useState } from "react";

// function checkEmailValidity(email: string){
//     if(!email.includes('@')) return (<p>email sbagliata</p>)

//     if(!email.endsWith('.com')) return (<p>email sbagliata</p>)

//     return (<p>email CORRETTA</p>)
// }

function Counter(){
    const [counter, setCounter] = useState<number>(0);
    const [email, setEmail] = useState<string>("");

    return (
        <div>
            <h1>Contatore: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>RES</button>
            <input 
                type="text" 
                value={email} 
                placeholder="inserici email"
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* {checkEmailValidity(email)}
            {email.includes('@') ? <p>Email corretta</p> : <p>Email sbagliata</p>}
            {counter >= 10 ? <p>OK</p> : <p>KK</p>} */}
        </div>
    );
}
export default Counter;
