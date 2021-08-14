export const fetchWrapper = {
  get,
};

async function get(url: RequestInfo) {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function handleResponse(response: Response): Promise<any> {
  const text = await response.text();
  const data = text && JSON.parse(text);

  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
}
