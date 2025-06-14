import { useState, useEffect } from 'react';

export function useFetch(uri) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uri) return;

    setLoading(true);
    fetch(uri)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [uri]);

  return { data, error, loading };
}