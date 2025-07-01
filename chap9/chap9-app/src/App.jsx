import { useState, Suspense, lazy } from 'react'
import './App.css'

import Agreement from './components/Agreement'
//import AppInternal from './AppInternal'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import ErrorBoundary from './components/ErrorBoundary';

const AppInternal = lazy(() => import('./AppInternal'));

function App() {
  const [agree, setAgree] = useState(false)

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />
  } else {
    return (
      <ErrorBoundary>
        <Suspense fallback={<ClimbingBoxLoader />} >
          <AppInternal />
        </Suspense>
      </ErrorBoundary>
    )
  }
}

export default App
