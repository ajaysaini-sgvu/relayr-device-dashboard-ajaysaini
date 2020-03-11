import superagent from "superagent";

async function fetchData(baseURL, relURL, params = {}, method = "get") {
  const requestUrl = baseURL + relURL;
  const request = superagent[method](requestUrl);

  if (params && params.payload) {
    request.send(params.payload);
  }

  const result = new Promise((resolve, reject) => {
    request
      .then(response => {
        resolve(response);
      })
      .catch(e => {
        reject(e);
      });
  });

  return result;
}

export default fetchData;
