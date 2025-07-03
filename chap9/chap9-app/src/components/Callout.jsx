import ErrorBoundary from "./ErrorBoundary";

export default function Callout({ children, ...props }) {
  return (
    <ErrorBoundary>
      <div {...props}>
        {children}
      </div>
    </ErrorBoundary>
  );
}