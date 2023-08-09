import s from './AddCardCity.module.css'
import { useState } from 'react';
import { toast } from 'react-toastify';

import AddCardCityView from '../AddCardCityView/AddCardCityView'


function AddCardCity2({ setModalActive, cards, removeCard, filterCard }) {
  // debugger

  const [searchCity, setSearchCity] = useState('')
  const [filteredCards, setFilteredCards] = useState(cards);

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
    setSearchCity('')
  }



  const openModal = () => {
    setModalActive(true)
  }

  return (
    <div className={s.container}>
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
              {filteredCards.map(card => (
                <li key={card.id}>{<AddCardCityView cards={cards} removeCard={removeCard} filterCard={filterCard} />}</li>
              ))}
            </ul>
          </div>
        </form>
      </div>
      <button className={s.btn_add_city} onClick={openModal} >
        <span>🞥</span>
        <h3>Add trip</h3>
      </button>
    </div>
  )
}

export default AddCardCity2;


// import s from './SearchCity.module.css'
