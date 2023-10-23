import { useState, useEffect } from 'react';
import api from '../../services/cityPhotoAPI';

function SearchCityPhoto({ searchCity }) {

  const [, setRequest] = useState(null);


  useEffect(() => {
    if (!searchCity) {
      return;
    }

    api.fetchAPI(searchCity)
      .then(request => {
        setRequest(request);
      })
    // .catch(error => {
    //   setError(error);
    // })
  }, [searchCity])
}

export default SearchCityPhoto;