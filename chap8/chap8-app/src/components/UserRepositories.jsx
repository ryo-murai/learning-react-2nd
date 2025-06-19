import Fetch from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export default function UserRepositories({ login, onSelect = f => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos?per_page=20`}
      renderSuccess={({ data }) => (
        <>
          <RepoMenu repositories={data} login={login} onSelect={onSelect} />
          {/* <List
            data={data}
            renderItem={(repo) => (
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            )}
            renderEmpty={<p>No repositories found.</p>}
          /> */}
        </>
      )}
    />
  );
}