import { useEffect, useState } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div>
      <p>Tempo trascorso: {seconds}s</p>
      <button onClick={() => setRunning((r) => !r)}>{running ? 'Pausa' : 'Avvia'}</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}
