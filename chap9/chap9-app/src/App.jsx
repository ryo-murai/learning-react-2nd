import { useState, Suspense, lazy } from 'react'
import './App.css'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import GridLoader from 'react-spinners/GridLoader'

import Agreement from './components/Agreement'
//import AppInternal from './AppInternal'
import ErrorBoundary from './components/ErrorBoundary';
import Status from './components/Status';

const AppInternal = lazy(() => import('./AppInternal'));


function App() {
  const [agree, setAgree] = useState(false)

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />
  } else {
    return (
      <>
        <ErrorBoundary>
          <Suspense fallback={<ClimbingBoxLoader />} >
            <AppInternal />
          </Suspense>
        </ErrorBoundary>
        <Suspense fallback={<GridLoader />}>
          <ErrorBoundary>
            <Status />
          </ErrorBoundary>
        </Suspense>
      </>
    )
  }
}

export default App
