import React, { useState } from 'react';
import s from './AddCardCity.module.css'
import AddCardCityView from '../AddCardCityView/AddCardCityView'



const AddCardCity = ({ setModalActive, removeCard, filteredCards, filterCityWeather }) => {
  // debugger


  const [activeCard, setActiveCard] = useState(null);
  const [scrollX, setScrollX] = useState(0);

  const scrollLeft = () => {
    setScrollX(scrollX - 150);
  };

  const scrollRight = () => {
    setScrollX(scrollX + 150);
  };


  const openModal = () => {
    setModalActive(true)
  }

  return (
    <div className={s.horizontal_scroll_container}>
      <button className={s.btnScroll} onClick={scrollLeft}>&#129192;</button>
      <div className={s.container} style={{ transform: `translateX(${scrollX}px)` }}>
        <AddCardCityView
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          removeCard={removeCard}
          filteredCards={filteredCards}
          filterCityWeather={filterCityWeather}
        />
        <button className={s.btn_add_city} onClick={openModal} >
          <span>🞥</span>
          <h3>Add trip</h3>
        </button>
      </div>
      <button className={s.btnScroll} onClick={scrollRight}>&#129195;</button>
    </div >
  )
};

export default AddCardCity;
