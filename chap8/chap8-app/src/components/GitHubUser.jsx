import { useState, useEffect } from 'react';

const storage = localStorage;

const loadJSON = key => key && JSON.parse(storage.getItem(key));

const saveJSON = (key, value) => storage.setItem(key, JSON.stringify(value));

export default function GitHubUser({ login }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (login) {
      setLoading(true);
      fetch(`https://api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response;
        })
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
      // .finally(() => {
      //   setLoading(false);
      // });
    }
  }, [login]);

  if (error) {
    return (
      <>
        <h1>Error: {error.message}</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return null;
  }
  return (
    <div className="github-user">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <h1>{data.login}</h1>
      <p>Name: {data.name}</p>
      <p>Location: {data.location}</p>
    </div>
  )
};

export const GitHubUserCache = ({ login }) => {
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
};