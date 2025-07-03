
// const loadStatus = () => "success - ready";
const loadStatus = () => (function () {
  let error, response;
  const promise = new Promise((resolves) =>
    setTimeout(resolves, 3000)
  )
    .then(() => (response = "success"))
    .catch(e => (error = e));

  return function () {
    if (error) {
      throw error;
    } else if (response) {
      return response;
    } else {
      throw promise;
    }
  };
})();

export default function Status() {
  const status = loadStatus();

  return (
    <div className="status">
      <h2>Status</h2>
      <p>{status}</p>
    </div>
  );
}