import { useState, useEffect } from 'react';
import api from '../../services/cityPhotoAPI';

function SearchCityPhoto({ searchCityName, getCityImg }) {
  // console.log(searchCityName)
  const [request, setRequest] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  // console.log("request", request)


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



  // useEffect(() => {
  //   if (!searchCityName) {
  //     return;
  //   }
  //   api.fetchAPI(searchCityName)
  //     .then(request => {
  //       setRequest(request);
  //       getCityImg(request)
  //         .then(imgUrl => {
  //           setImageURL(imgUrl); // Зберігаємо URL фото в стані
  //         })
  //         .catch(error => {
  //           console.error('Помилка отримання фото:', error);
  //         });
  //     })
  // }, [searchCityName, getCityImg])

  // return (
  //   <div>
  //     {/* Тут можна вставити фото зі stаte imageURL */}
  //     {imageURL && <img src={imageURL} alt="City" />}
  //   </div>
  // );
}


export default SearchCityPhoto;