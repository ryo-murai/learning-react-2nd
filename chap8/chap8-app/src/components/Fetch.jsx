import { useFetch } from "../hooks/useFetch";
import useMountedRef from "../hooks/useMountedRef";

export default function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>loading ...</p>,
  renderError = error => (<pre>{JSON.stringify(error, null, 2)}</pre>)
}) {
  const { loading, data, error } = useFetch(uri);
  const mounted = useMountedRef();

  if (!mounted.current) {
    return null; // Component is unmounted, do not render anything
  }

  if (error) {
    return renderError(error);
  }
  if (loading) {
    return loadingFallback;
  }
  if (data) {
    return renderSuccess({ data });
  }
}