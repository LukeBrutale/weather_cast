import s from './WeatherWeekView.module.css'
import { v1 } from 'uuid'
import { useState, useEffect } from 'react'
import api from '../../services/weatherWeekAPI'



function WeatherWeekView({ searchCity, startDate, endDate }) {
  const options = { weekday: 'long' };
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null)


  useEffect(() => {
    if (!searchCity) {
      return;
    }
    api.weatherWeekAPI(searchCity, startDate, endDate)
      .then(request => {
        setWeather(request);
        // setStatus('resolved')

      })
      .catch(error => {
        setError(error);
        // setStatus('rejected')

      })
  }, [searchCity, startDate, endDate])

  return (
    <div >
      <h3 className={s.week}>Week</h3>
      <ul className={s.horizontal_scroll_container} >
        {weather && weather.days.map(entry => (
          <li className={s.item} key={v1()}>
            <h4>{new Date(entry.datetime).toLocaleString('en-US', options)}</h4>
            <img src={`/weather_cast/${entry.icon}.svg`} alt={entry.conditions} />
            <span>{entry.tempmax}&#176; / {entry.tempmin}&#176;</span>
          </li>
        ))}
      </ul>
    </div>
  )

};


export default WeatherWeekView;
