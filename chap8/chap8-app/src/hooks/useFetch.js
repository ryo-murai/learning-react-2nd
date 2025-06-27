import { useState, useEffect } from 'react';
import useMountedRef from './useMountedRef';

export function useFetch(uri) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const mounted = useMountedRef();

  useEffect(() => {
    if (!uri) return;
    if (!mounted.current) return;

    setLoading(true);
    fetch(uri)
      .then(response => {
        if (!mounted.current) throw new Error("component is not mounted");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(setData)
      .catch(error => {
        if (mounted.current) {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
  }, [uri]);

  return { data, error, loading };
}