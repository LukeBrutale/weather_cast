import { useState, useEffect } from 'react';
import api from '../../services/cityPhotoAPI';

function SearchCityPhoto({ searchCityName, getCityImg }) {
  const [request, setRequest] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  // console.log(imageURL)
  // console.log(request)

  useEffect(() => {
    if (!searchCityName) {
      return;
    }
    api.fetchAPI(searchCityName)
      .then(request => {
        setRequest(request);
        getCityImg(request)
          .then(imgUrl => {
            setImageURL(imgUrl); // Зберігаємо URL фото в стані
          })
          .catch(error => {
            console.error('Помилка отримання фото:', error);
          });
      })
  }, [searchCityName, getCityImg])

  // return (
  //   <div>
  //     {/* Тут можна вставити фото зі stаte imageURL */}
  //     {imageURL && <img src={imageURL} alt="City" />}
  //   </div>
  // );
}


export default SearchCityPhoto;