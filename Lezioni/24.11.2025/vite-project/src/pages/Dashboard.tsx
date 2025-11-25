import { useLocation, type Location, useNavigate } from 'react-router-dom';
import type { ILoginNavigateState } from './Login.tsx';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const location: Location<ILoginNavigateState> = useLocation();
  const username = location.state?.username ?? 'Guest';

  useEffect(() => {
    if (!location.state) navigate('/login');
  }, [location, navigate]);

  function handleLogout() {
    console.log('Logout clicked');
    navigate(`/login`, {
      state: { username: username },
    });
  }

  return (
    <div>
      <h1>Benvenuto {username}</h1>
      <h2>Numero Chiamate API: {count}</h2>
      <button onClick={() => setCount(count + 1)}> Incrementa </button>
      <button onClick={handleLogout}> Logout </button> {/* ciao :) */}
    </div>
  );
}
