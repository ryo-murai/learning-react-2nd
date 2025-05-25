import './App.css'
import FetchApi from './components/FetchApi'
import GitHubUser, { GitHubUserCache } from './components/GitHubUser'

function App() {

  return (
    <>
      <FetchApi />
      <GitHubUserCache login="moonhighway" />
      <GitHubUser login="moonhighway" />
    </>
  )
}

export default App
