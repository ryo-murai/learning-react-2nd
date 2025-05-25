import { useState, useEffect, memo } from "react";

const Cat = ({ name }) => {
  useEffect(() => {
    console.log(`Cat ${name} rendered`);
  }, [name]);
  return <p>{name}</p>;
};

const PureCat = memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name);

const initialCats = ["Mittens", "Fluffy", "Whiskers"];

export default function Cats() {
  const [cats, setCats] = useState(initialCats);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt("name a new cat")])}>Add a Cat</button>
    </>
  );
}