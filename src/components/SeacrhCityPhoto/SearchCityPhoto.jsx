import { useState, useEffect } from 'react';
import api from '../../services/cityPhotoAPI';

function SearchCityPhoto({ searchCityName, getCityImg }) {
  const [, setRequest] = useState(null);
  const [, setImageURL] = useState(null);
  // console.log(searchCityName)



  useEffect(() => {
    async function fetchData() {
      try {
        if (!searchCityName) {
          return;
        }
        const request = await api.fetchAPI(searchCityName);
        setRequest(request);
        const imgUrl = await getCityImg(request);
        setImageURL(imgUrl);
      } catch (error) {
        console.error('Помилка отримання фото:', error);
      }
    }
    fetchData();
  }, [searchCityName, getCityImg]);
}


export default SearchCityPhoto;