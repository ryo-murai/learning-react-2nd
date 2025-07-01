import { useState, lazy } from 'react'
import './App.css'

import Agreement from './components/Agreement'
// import AppInternal from './AppInternal'

const AppInternal = lazy(() => import('./AppInternal'));

function App() {
  const [agree, setAgree] = useState(false)

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />
  } else {
    return <AppInternal />
  }
}

export default App
