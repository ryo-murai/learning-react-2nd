import { useEffect } from 'react';
import { useIterator } from '../hooks/useIterator';
import RepositoryReadme from './RepositoryReadme';

export function RepoMenu({ repositories, login }) {
  const [{ name }, prev, next] = useIterator(repositories, 0);

  return (
    <>
      <div className="repo-menu" style={{ display: 'flex' }}>
        <button onClick={prev}>&lt;</button>
        <span>{name}</span>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
}