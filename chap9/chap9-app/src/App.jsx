import { useState } from 'react'
import './App.css'
import SiteLayout from './components/SiteLayout'
import Callout from './components/Callout'
import BreakThings from './components/BreakThings'
import ErrorBoundary from './components/ErrorBoundary'

function App() {

  return (
    <>
      <SiteLayout menu={<p>Menu</p>}>
        <>
          <ErrorBoundary>
            <Callout>Callout <BreakThings /></Callout>
          </ErrorBoundary>
          <h1>Content</h1>
          <p>This is the main part of the example layout</p>
        </>
      </SiteLayout>
    </>
  )
}

export default App
