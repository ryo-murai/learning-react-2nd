import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Fetch from './Fetch';
import UserRepositories from './UserRepositories';

const storage = localStorage;

const loadJSON = key => key && JSON.parse(storage.getItem(key));

const saveJSON = (key, value) => storage.setItem(key, JSON.stringify(value));

export default function GitHubUser({ login }) {

  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
};

function UserDetails({ data }) {
  return (
    <div className="github-user">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        <p>Name: {data.name}</p>
        <p>Location: {data.location}</p>
      </div>
      <UserRepositories
        login={data.login}
        onSelect={repo => console.log(`Selected repo: ${repo}`)}
      />
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