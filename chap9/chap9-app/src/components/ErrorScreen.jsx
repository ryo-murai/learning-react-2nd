export default function ErrorScreen({ error }) {
  return (
    <div className="error">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <p>
        Please try again later or contact support if the problem persists.
      </p>
    </div>
  );
}