import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{padding:20}}>
      <h1>404 — Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
      <p>
        Torna alla <Link to="/">Home</Link> o controlla l'URL.
      </p>
    </div>
  );
}
