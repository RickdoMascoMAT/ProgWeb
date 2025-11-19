import { useState } from "react";

function Counter()  {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
        <h1>Fag Slimed {counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>  
        <button onClick={() => setCounter(0)}>Reset Counter</button>  
    </div>
  );
}

export default Counter;