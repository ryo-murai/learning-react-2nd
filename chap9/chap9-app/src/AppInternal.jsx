import SiteLayout from './components/SiteLayout'
import Callout from './components/Callout'
import BreakThings from './components/BreakThings'
import ErrorBoundary from './components/ErrorBoundary'

const Menu = () => {
  <ErrorBoundary>
    <p style={{ color: 'white' }}>TODO: Build Menu</p>
  </ErrorBoundary>
}

export default function AppInternal() {
  return (
    <>
      <SiteLayout menu={<Menu />}>
        <Callout>Callout</Callout>
        <ErrorBoundary>
          <h1>Content</h1>
          <p>This is the main part of the example layout</p>
        </ErrorBoundary>
      </SiteLayout>
    </>
  )
}