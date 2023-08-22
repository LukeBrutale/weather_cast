import s from './AddCardCityView.module.css'
import React, { useState } from 'react';
import { v1 } from 'uuid'


const AddCardCityView = React.memo(({ removeCard, filteredCards, filterCityWeather }) => {
  // debugger

  const [activeCard, setActiveCard] = useState('');

  return (
    <>
      {filteredCards.map(card => (
        <div className={`${s.card} ${activeCard === card.id ? s.active : ''}`} key={v1()}
          onClick={() => {

            setActiveCard(card.id);
            filterCityWeather(card.id);
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
    </>
  )
})

export default AddCardCityView;