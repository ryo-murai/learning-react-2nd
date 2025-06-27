import { useState, useEffect, useCallback } from 'react';
import useMountedRef from '../hooks/useMountedRef';

import Markdown from 'react-markdown';

export default function RepositoryReadme({ login, repo }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [markdown, setMarkdown] = useState('');

  const mounted = useMountedRef();

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);

    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;

    const { download_url } = await fetch(uri).then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching README: ${response.statusText}`);
      } else {
        return response.json();
      }
    });
    const markdownText = await fetch(download_url)
      .then(response => response.text());

    if (mounted.current) {
      setMarkdown(markdownText);
      setLoading(false);
    }

  }, []);

  useEffect(() => {
    if (login && repo) {
      loadReadme(login, repo).catch(setError);
    }
  }, [login, repo, loadReadme]);

  if (error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (loading)
    return <p>Loading...</p>

  return (
    <>
      <Markdown>{markdown}</Markdown>
    </>
  );
}