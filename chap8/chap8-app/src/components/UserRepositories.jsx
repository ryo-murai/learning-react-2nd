import Fetch from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export default function UserRepositories({ login, selected, onSelect = f => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos?per_page=20`}
      renderSuccess={({ data }) => (
        <RepoMenu repositories={data} login={login} selected={selected} onSelect={onSelect} />
      )}
    />
  );
}