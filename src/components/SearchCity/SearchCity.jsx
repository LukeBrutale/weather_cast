import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchCity.module.css'


function SearchCity({ cards }) {
  // debugger
  const [searchCity, setSearchCity] = useState('')
  const [, setFilteredCards] = useState(cards);

  const handleNameChange = e => {
    const searchText = e.target.value;
    setSearchCity(e.currentTarget.value)

    const filtered = cards.filter(card =>
      card.cityName.toLowerCase().includes(searchText.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) =>
      a.cityName.localeCompare(b.cityName)
    );

    setFilteredCards(sorted);
  }




  const handleSubmit = e => {
    e.preventDefault();
    if (searchCity.trim() === '') {
      toast("Enter city");
      return;
    }
    // setSearchCity('')
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
          <ul>
            {/* {filteredCards.map(card => (
              <li key={card.id}>{card.cityName}</li>
            ))} */}
          </ul>
        </div>
      </form>
    </div>
  )

  // return (
  //   <div>
  //     <input type="text" value={searchCity} onChange={handleNameChange} placeholder="Search by name" />
  //     <ul>
  //       {filteredCards.map(card => (
  //         <li key={card.id}>{card.cityName}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};


export default SearchCity;

