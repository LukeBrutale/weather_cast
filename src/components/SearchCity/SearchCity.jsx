import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchCity.module.css'


function SearchCity({ cities, updateFilteredCards }) {
  // debugger
  const [searchCity, setSearchCity] = useState('')
  const [filtededCard, setFilteredCards] = useState(cities);

  const handleNameChange = e => {
    const searchText = e.target.value;
    setSearchCity(e.currentTarget.value)

    const filtered = cities.filter(card =>
      card.cityName.toLowerCase().includes(searchText.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) =>
      a.cityName.localeCompare(b.cityName)
    );

    setFilteredCards(sorted);
    updateFilteredCards(sorted)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchCity.trim()) {
      toast("Enter city");
      return;
    }
  }


  return (
    <div className={s.search_form}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.castom_input}>
          <input
            className={s.input}
            type="text"
            placeholder='Search your trip'
            name="searchCity"
            value={searchCity}
            onChange={handleNameChange}
          />
        </div>
      </form>
    </div>
  )
};


export default SearchCity;