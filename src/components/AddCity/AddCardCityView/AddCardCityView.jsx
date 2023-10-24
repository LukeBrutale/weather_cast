import React, { useRef } from 'react';
import s from './AddCardCityView.module.css'


const AddCardCityView = ({ activeCard, removeCard, filteredCards, filterCityWeather, setActiveCard }) => {
  // debugger

  // console.log(filteredCards)
  const containerRef = useRef(null);
  const handleScroll = (e) => {
    const container = containerRef.current;
    if (container) {
      const scrollStep = 2;
      container.scrollLeft += e.deltaY / scrollStep;
    }
  };

  return (
    <div
      className={s.horizontal_scroll_container}
      onWheel={handleScroll}
      ref={containerRef}
    >
      {filteredCards.map(card => (
        <div className={`${s.card} ${activeCard === card.id ? s.active : ''}`} key={card.id}
          onClick={() => {
            console.log(card.img)
            filterCityWeather(card.id);
            setActiveCard(card.id);
          }}>
          <img src={card.img} alt='' className={s.img_city} />
          <div className={s.city_date_name}>
            <h5 className={s.city}>{card.cityName}</h5>
            <span className={s.date}>{new Date(card.startDate).toLocaleDateString()}</span>-
            <span className={s.date}>{new Date(card.endDate).toLocaleDateString()}</span>
            <button className={s.btn_delete} onClick={(e) => { e.stopPropagation(); removeCard(card.id) }} > &#10006;</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default AddCardCityView;