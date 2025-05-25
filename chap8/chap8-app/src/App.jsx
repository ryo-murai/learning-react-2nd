import { useState } from 'react'
import './App.css'
import FetchApi from './components/FetchApi'
import GitHubUser from './components/GitHubUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchApi />
      <GitHubUser login="moonhighway" />
    </>
  )
}

export default App
