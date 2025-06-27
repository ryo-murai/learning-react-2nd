import { useState, useCallback, useMemo } from 'react';

export const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    if (i === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(i - 1);
    }
  }, [i]);

  const next = useCallback(() => {
    if (i === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(i + 1);
    }
  }, [i]);

  const item = useMemo(() => items[i], [i]);

  return [item || items[i], prev, next];
}