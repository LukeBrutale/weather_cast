import React, { useRef } from 'react';
import s from './AddCardCityView.module.css'

// import { v1 } from 'uuid'


const AddCardCityView = ({ activeCard, removeCard, filteredCards, filterCityWeather, setActiveCard }) => {
  // debugger

  const containerRef = useRef(null);
  const handleScroll = (e) => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += e.deltaY; // Прокручуємо контейнер на відстань, вказану у e.deltaY (зазвичай -100 або 100 на крок)
    }
  };

  return (
    <div
      className={s.horizontal_scroll_container}
      onWheel={handleScroll} // Додавання обробника подій для обробки прокрутки мишкою
      ref={containerRef}
    >
      {filteredCards.map(card => (
        <div className={`${s.card} ${activeCard === card.id ? s.active : ''}`} key={card.id}
          onWheel={handleScroll} // Додавання обробника подій для обробки прокрутки мишкою
          ref={containerRef}
          onClick={() => {
            filterCityWeather(card.id);
            setActiveCard(card.id);
          }}>
          <img src={card.img} alt='' className={s.img_city} />
          <div className={s.city_date_name}>
            <h5 className={s.city}>{card.cityName}</h5>
            <span className={s.date}>{new Date(card.startDate).toLocaleDateString()}</span>-
            <span className={s.date}>{new Date(card.endDate).toLocaleDateString()}</span>
            <button className={s.btn_delete} onClick={(e) => { e.stopPropagation(); removeCard(card.id) }} >&#128465;</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default AddCardCityView;

// { `${s.card} ${activeCard === card.id ? s.active : ''}` }