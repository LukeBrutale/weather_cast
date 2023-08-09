function weatherWeekAPI(searchCity, startDate, endDate) {
  return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchCity}/${startDate}/${endDate}?unitGroup=metric&include=days&key=BH4X83QJAUWRTFK3P9P6DSS3J`, {
    method: "GET",
    headers: {},
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("City not found"));
  });
}

const api = {
  weatherWeekAPI,
};

export default api;
