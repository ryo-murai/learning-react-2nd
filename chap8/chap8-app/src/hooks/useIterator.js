import { useState } from 'react';

export const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);

  const prev = () => {
    if (i === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(i - 1);
    }
  };

  const next = () => {
    if (i === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(i + 1);
    }
  };

  return [items[i], prev, next];
}