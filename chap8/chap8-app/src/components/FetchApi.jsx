
export default function FetchApi() {
  const fetchData = () => {
    fetch('https://api.github.com/users/moonhighway')
      .then(response => response.json())
      .then(console.log)
      .catch(console.error);
  }
  const fetchDataAsync = async () => {
    try {
      const response = await fetch('https://api.github.com/users/moonhighway');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button onClick={fetchData}>
        Invoke Fetch API
      </button>
      <button onClick={fetchDataAsync}>
        Invoke Fetch API Async
      </button>
    </>
  );
};