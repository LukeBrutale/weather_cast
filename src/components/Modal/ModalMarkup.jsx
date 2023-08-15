import React, { useState } from 'react';

function CityAutocomplete({ cities }) {
  // debugger
  const [inputValue, setInputValue] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = cities.filter(city =>
      city.cityName.toLowerCase().includes(value.toLowerCase())
    );

    setSelectedCity(null); // Зніміть вибір міста при зміні вводу
    setFilteredCities(filtered);
  };

  const handleCitySelect = (city) => {
    setInputValue(city.cityName);
    setSelectedCity(city);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredCities.map(city => (
          <li
            key={city.id}
            onClick={() => handleCitySelect(city)}
          >
            {city.cityName}
          </li>
        ))}
      </ul>
      {selectedCity && (
        <div>
          <h2>{selectedCity.cityName}</h2>
          <img src={selectedCity.img} alt={selectedCity.cityName} />
          {/* Додайте компонент для вибору дати */}
        </div>
      )}
    </div>
  );
}

export default CityAutocomplete;
