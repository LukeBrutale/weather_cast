import React, { useState } from 'react';
import s from './AddCardCity.module.css'
import AddCardCityView from '../AddCardCityView/AddCardCityView'



const AddCardCity = ({ setModalActive, removeCard, filteredCards, filterCityWeather }) => {
  // debugger


  const [activeCard, setActiveCard] = useState(null);



  const openModal = () => {
    setModalActive(true)
  }

  return (
    <div className={s.container} >
      <button className={s.btn_add_city} onClick={openModal} >
        <span>🞥</span>
        <h3>Add trip</h3>
      </button>
      <AddCardCityView
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        removeCard={removeCard}
        filteredCards={filteredCards}
        filterCityWeather={filterCityWeather}
      />
    </div>
  )
};

export default AddCardCity;
