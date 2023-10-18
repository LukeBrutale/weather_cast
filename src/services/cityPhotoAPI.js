const API_KEY = "jk6vLNPxT3uYkTXHgukJIyQypdj6fVB4sxOGQMZk9PAyDE7Ccu29ADgc";

function fetchAPI(searchCity) {
  return fetch(`https://api.pexels.com/v1/search?query=${searchCity}&per_page=1`, {
    method: "GET",
    headers: {
      Accept: "aplication/json",
      Authorization: API_KEY,
    },
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("Not found"));
  });
}

const api = {
  fetchAPI,
};

export default api;
