
export default function List({ data = [], renderItem, renderEmpty }) {
  if (data.length === 0) return renderEmpty;

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}