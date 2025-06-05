import './App.css'
import FetchApi from './components/FetchApi'
import GitHubUser, { GitHubUserCache } from './components/GitHubUser'
import List from './components/List'

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 }
]

function App() {

  return (
    <>
      <FetchApi />
      <GitHubUserCache login="moonhighway" />
      <GitHubUser login="moonhighway" />

      <List
        data={tahoe_peaks}
        renderItem={item => `${item.name} (${item.elevation} ft)`}
        renderEmpty={<p>No peaks found.</p>}
      />
    </>
  )
}

export default App
