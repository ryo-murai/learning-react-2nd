import { useState, useEffect } from 'react';

export default function GitHubUser({ login }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (login) {
      fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setUser)
        .catch(console.error);
    }
  }, [login]);

  if (!user) {
    return <p>Loading...</p>;
  } else {
    return <pre>{JSON.stringify(user, null, 2)}</pre>;
  }
}