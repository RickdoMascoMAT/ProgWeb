import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ILoginNavigateState {
  username: string;
}

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submit');

    const stateObj: ILoginNavigateState = {
      username: username,
    };

    if (!username.trim()) {
      setError('Compila la casella di login');
      return;
    }

    setError('');
    navigate(`/dashboard`, {
      state: stateObj,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          if (error) setError('');
        }}
      />
      {error && <p style={{ color: 'red', marginTop: 8 }}>{error}</p>}
      <button type="submit" disabled={!username.trim()}>
        Login
      </button>
    </form>
  );
}
