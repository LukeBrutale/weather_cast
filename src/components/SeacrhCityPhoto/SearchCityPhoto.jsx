import { useState, useEffect } from 'react';
import api from '../../services/cityPhotoAPI';

function SearchCityPhoto({ searchCityName, getCityImg }) {

  const [, setImageURL] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!searchCityName) {
          return;
        }

        const response = await api.fetchAPI(searchCityName);

        const imgUrl = await getCityImg(response.photos[0].src.medium);
        setImageURL(imgUrl);
      } catch (error) {
        console.error('Помилка отримання фото:', error);
      }
    }

    fetchData();
  }, [searchCityName, getCityImg]);
}

export default SearchCityPhoto;
