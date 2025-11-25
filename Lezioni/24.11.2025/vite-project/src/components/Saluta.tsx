interface ISalutaProps {
  nome: string;
  cognome: string;
  eta: number;
  email: string;
  cf: string;
  studio: string;
}

function Saluta({ nome, cognome, eta, email, cf, studio }: ISalutaProps) {
  return (
    <div>
      <p>Ciao, benvenuto nel mio sito {nome}!</p>
      <p>Cognome: {cognome}</p>
      <p>Età: {eta}</p>
      <p>Email: {email}</p>
      <p>Codice Fiscale: {cf}</p>
      <p>Studio: {studio}</p>
    </div>
  );
}

export default Saluta;
