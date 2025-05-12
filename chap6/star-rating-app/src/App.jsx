import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating'
import colorData from './data/color-data.json'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'
import { v4 } from 'uuid'

function App() {
  const [colors, setColors] = useState(colorData)
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
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors, {
              id: v4(),
              rating: 0,
              title,
              color
            }];
          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors)
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
