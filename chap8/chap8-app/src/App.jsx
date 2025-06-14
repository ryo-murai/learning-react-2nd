import './App.css'
import FetchApi from './components/FetchApi'
import GitHubUser, { GitHubUserCache } from './components/GitHubUser'
import List from './components/List'
import { faker } from '@faker-js/faker'

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 }
]

const bigList = [...Array(5000)].map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

function App() {
  const renderItem = item => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <div>
        <p>{item.name} - {item.email}</p>
      </div>
    </div>
  );

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
      <List
        data={bigList}
        renderItem={renderItem}
        renderEmpty={<p>No users found.</p>}
      />
    </>
  )
}

export default App
