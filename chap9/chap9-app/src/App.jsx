import { useState, Suspense, lazy } from 'react'
import './App.css'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import GridLoader from 'react-spinners/GridLoader'

import Agreement from './components/Agreement'
//import AppInternal from './AppInternal'
import ErrorBoundary from './components/ErrorBoundary';
import Status from './components/Status';
import createResource from './hooks/createResource'
import { threeSecondsToGnar } from './hooks/threeSecondsToGnar'

const AppInternal = lazy(() => import('./AppInternal'));

const resource = createResource(threeSecondsToGnar);

function Gnar() {
  const gnar = resource.read();
  return <p>Gnar: {gnar.gnar}</p>;
}

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
            <Gnar />
          </ErrorBoundary>
        </Suspense>
      </>
    )
  }
}

export default App
