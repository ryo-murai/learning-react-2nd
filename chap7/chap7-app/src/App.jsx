import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from './components/Checkbox'
import { use } from 'react';
import ConsoleOutPanel from './components/ConsoleOutPanel';
import WordCount from './components/WordCount';

function App() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("Hello World");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  }

  useEffect(() => {
    console.log("App mounted");
  }, []);

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        {/* <Checkbox /> */}
      </div>
      <div>
        <label>Favorite phrase:</label> <input
          value={val}
          placeholder={phrase}
          onChange={e => set(e.target.value)}
        />
        <button onClick={createPhrase}>send</button>
      </div>
      <div>
        <ConsoleOutPanel />
      </div>
      <WordCount>You are not going to believe this but...</WordCount>

    </>
  )
}

export default App
