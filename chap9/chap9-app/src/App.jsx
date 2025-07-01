import { useState } from 'react'
import './App.css'
import SiteLayout from './components/SiteLayout'
import Callout from './components/Callout'

function App() {

  return (
    <>
      <SiteLayout menu={<p>Menu</p>}>
        <>
          <Callout>Callout</Callout>
          <h1>Content</h1>
          <p>This is the main part of the example layout</p>
        </>
      </SiteLayout>
    </>
  )
}

export default App
