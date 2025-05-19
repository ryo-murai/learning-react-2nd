import { useState } from "react";

const Cat = ({ name }) => {
  console.log(`Cat ${name} rendered`);
  return <p>{name}</p>;
};


export default function Cats() {
  const [cats, setCats] = useState(["Mittens", "Fluffy", "Whiskers"]);

  return (
    <>
      {cats.map((cat, i) => (
        <Cat key={i} name={cat} />
      ))}
      <button onClick={() => setCats([...cats, prompt("New Cat")])}>
        Add a Cat
      </button>
    </>
  );
}