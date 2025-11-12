import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Saluta from './components/Saluta';

export default function App() {
  const [nome, setNome] = useState('');
  return (
    <div className="bord">
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Inserisci il tuo nome"
        />
      </label>
      <Saluta 
        nome={nome} 
        cognome="mascotto" 
        eta={6+7+6+7+41}
        email="nigger@gmail.com" 
        cf="MSCRCR03B15A703S" 
        studio="Più o meno"
      />
      <Counter />
    </div>
  );
}