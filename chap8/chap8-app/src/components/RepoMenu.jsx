import { useEffect } from 'react';
import { useIterator } from '../hooks/useIterator';

export function RepoMenu({ repositories, onSelect = f => f }) {
  const [{ name }, prev, next] = useIterator(repositories, 0);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <div className="repo-menu" style={{ display: 'flex' }}>
      <button onClick={prev}>&lt;</button>
      <span>{name}</span>
      <button onClick={next}>&gt;</button>
    </div>
  );
}