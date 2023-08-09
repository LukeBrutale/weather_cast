// import React, { useState } from 'react';

// const CityInput = () => {
//   const [selectedCity, setSelectedCity] = useState('');
//   const cities = [
//     { name: 'Київ', photo: 'path_to_kyiv_photo.jpg' },
//     { name: 'Львів', photo: 'path_to_lviv_photo.jpg' },
//     { name: 'Харків', photo: 'path_to_kharkiv_photo.jpg' },
//     // Додайте інші міста та їх фото за потреби
//   ];

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   const selectedCityInfo = cities.find((city) => city.name === selectedCity);

//   return (
//     <div>
//       <label htmlFor="city">Оберіть місто:</label>
//       <input
//         type="text"
//         id="city"
//         value={selectedCity}
//         onChange={handleCityChange}
//         list="cities"
//       />
//       <datalist id="cities">
//         {cities.map((city, index) => (
//           <option key={index} value={city.name} />
//         ))}
//       </datalist>

//       {selectedCityInfo && (
//         <div>
//           <h2>{selectedCityInfo.name}</h2>
//           <img src={selectedCityInfo.photo} alt={selectedCityInfo.name} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CityInput;


import React, { useState } from 'react';

const CityInput = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const cities = [
    { name: 'Київ', photo: 'path_to_kyiv_photo.jpg' },
    { name: 'Львів', photo: 'path_to_lviv_photo.jpg' },
    { name: 'Харків', photo: 'path_to_kharkiv_photo.jpg' },
    // Додайте інші міста та їх фото за потреби
  ];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const selectedCityInfo = cities.find((city) => city.name === selectedCity);

  return (
    <div>
      <label htmlFor="city">Оберіть місто:</label>
      <input
        type="text"
        id="city"
        value={selectedCity}
        onChange={handleCityChange}
        list="cities"
      />
      <datalist id="cities">
        {cities.map((city, index) => (
          <option key={index} value={city.name} label={city.name} />
        ))}
      </datalist>

      {selectedCityInfo && (
        <div>
          <h2>{selectedCityInfo.name}</h2>
          <img src={selectedCityInfo.photo} alt={selectedCityInfo.name} />
        </div>
      )}
    </div>
  );
};

export default CityInput;
