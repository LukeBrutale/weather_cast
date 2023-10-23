import { useState, useEffect } from 'react';
import api from '../../services/cityPhotoAPI';

function SearchCityPhoto({ searchCityName, getCityImg }) {
  // console.log(searchCityName)

  const [request, setRequest] = useState(null);


  useEffect(() => {
    if (!searchCityName) {
      return;
    }
    api.fetchAPI(searchCityName)
      .then(request => {
        setRequest(request);
      })
    // .catch(error => {
    //   setError(error);
    // })
  }, [searchCityName])

  getCityImg(request)
}



export default SearchCityPhoto;