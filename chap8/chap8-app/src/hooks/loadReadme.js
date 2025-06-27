
const loadReadme = async (login, repo) => {
  const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
  const { download_url } = await fetch(uri, {
    headers: {
      Accept: 'application/vnd.github.v3.raw'
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
  const markdown = await fetch(download_url).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  });

  console.log(`Loaded README for ${login}/${repo}`);
  console.log(markdown);
}