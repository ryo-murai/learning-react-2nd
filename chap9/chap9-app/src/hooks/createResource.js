
export default function createResource(pending) {
  let error, response;
  pending.then(r => (response = r)).catch(e => (error = e));
  return {
    read() {
      if (error) {
        throw error;
      } else if (response) {
        return response;
      } else {
        throw pending;
      }
    },
  };
}