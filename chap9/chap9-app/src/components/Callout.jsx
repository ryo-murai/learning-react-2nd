
export default function Callout({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}