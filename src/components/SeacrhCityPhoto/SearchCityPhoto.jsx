import { useState, useEffect } from 'react';
import api from '../../services/cityPhotoAPI';

function SearchCityPhoto({ cityName }) {

  const [, setRequest] = useState(null);


  useEffect(() => {
    if (!cityName) {
      return;
    }

    api.fetchAPI(cityName.address)
      .then(request => {
        setRequest(request);
      })
    // .catch(error => {
    //   setError(error);
    // })
  }, [cityName])
}

export default SearchCityPhoto;