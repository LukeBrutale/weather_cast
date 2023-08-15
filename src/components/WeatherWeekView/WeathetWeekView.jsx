import s from './WeatherWeekView.module.css'
import { v1 } from 'uuid'
// import { useState } from 'react'

function WeatherWeekView({ request }) {
  const options = { weekday: 'long' };

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleWheel = (e) => {
  //   const container = e.currentTarget;
  //   const scrollAmount = 50; // Змініть це значення на бажане

  //   if (e.deltaX !== 0) {
  //     // Забороняємо вертикальний скролл
  //     e.preventDefault();

  //     // Оновлюємо позицію прокрутки залежно від значення deltaX
  //     setScrollPosition(scrollPosition + e.deltaX * scrollAmount);

  //     // Зміщуємо прокрутку контейнера
  //     container.scrollLeft = scrollPosition + e.deltaX * scrollAmount;
  //   }
  // };

  return (
    <div >
      <h3 className={s.week}>Week</h3>
      <ul className={s.horizontal_scroll_container} >
        {request.days.map(entry => (
          <li className={s.item} key={v1()}>
            <h4>{new Date(entry.datetime).toLocaleString('en-US', options)}</h4>
            <img src={`/weather_cast/${entry.icon}.svg`} alt={entry.conditions} />
            <span>{entry.tempmax}&#176; / {entry.tempmin}&#176;</span>
          </li>
        ))}
      </ul>
    </div>
  )


  //   return (
  //     <div
  //       className="horizontal-scroll-container"
  //       onWheel={handleWheel}
  //     >
  //       <div className="content">
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //       </div>
  //     </div>
  //   );
};


export default WeatherWeekView;
