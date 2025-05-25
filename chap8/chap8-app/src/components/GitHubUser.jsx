import { useState, useEffect } from 'react';

const storage = localStorage;

const loadJSON = key => key && JSON.parse(storage.getItem(key));

const saveJSON = (key, value) => storage.setItem(key, JSON.stringify(value));

export default function GitHubUser({ login }) {
  const [user, setUser] = useState(loadJSON(`github-user-${login}`));

  useEffect(() => {
    if (user) {
      const { name, avatar_url, location } = user;
      saveJSON(`github-user-${login}`, {
        name,
        login,
        avatar_url,
        location
      });
    }
  }, [user]);

  useEffect(() => {
    if (login && !user || user.login !== login) {
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