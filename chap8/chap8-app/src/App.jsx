import { useState } from 'react'
import './App.css'
import FetchApi from './components/FetchApi'
import GitHubUser, { GitHubUserCache } from './components/GitHubUser'
import List from './components/List'
import { FixedSizeList as VirtualList } from 'react-window'
import { faker } from '@faker-js/faker'
import SearchForm from './components/SearchForm'

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
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <div>
        <p>{bigList[index].name} - {bigList[index].email}</p>
      </div>
    </div>
  );

  const [login, setLogin] = useState('moonhighway');

  return (
    <>
      <FetchApi />
      <GitHubUserCache login="moonhighway" />

      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />

      <List
        data={tahoe_peaks}
        renderItem={item => `${item.name} (${item.elevation} ft)`}
        renderEmpty={<p>No peaks found.</p>}
      />
      <VirtualList
        height={500}
        itemCount={bigList.length}
        itemSize={50}
        width="100%"
      >
        {renderRow}
      </VirtualList>
    </>
  )
}

export default App
