import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating'
import colorData from './data/color-data.json'
import ColorList from './components/ColorList'
import Color from './components/Color'

function App() {
  const [colors] = useState(colorData)
  const [count, setCount] = useState(0)

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <StarRating
          style={{ backgroundColor: "lightblue" }}
          onDoubleClick={e => alert("Star rating double clicked!")}
        />
      </div>
      <ColorList colors={colors} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
