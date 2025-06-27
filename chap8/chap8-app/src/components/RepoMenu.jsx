import { useEffect } from 'react';
import { useIterator } from '../hooks/useIterator';

export function RepoMenu({ repositories, selected, onSelect = f => f }) {
  const [{ name }, prev, next] = useIterator(repositories, selected ? repositories.findIndex(repo => repo.name === selected) : undefined);

  useEffect(() => {
    if (name) {
      onSelect(name);
    }
  }, [name, onSelect]);

  return (
    <>
      <div className="repo-menu" style={{ display: 'flex' }}>
        <button onClick={prev}>&lt;</button>
        <span>{name}</span>
        <button onClick={next}>&gt;</button>
      </div>
    </>
  );
}