import s from './WeatherWeekView.module.css'
import { v1 } from 'uuid'

function WeatherWeekView({ request }) {
  const options = { weekday: 'long' };

  return (
    <div >
      <h3 className={s.week}>Week</h3>
      <ul className={s.list}>
        {request.days.map(entry => (
          <li className={s.item} key={v1()}>
            <h4>{new Date(entry.datetime).toLocaleString('en-US', options)}</h4>
            <img src={`./${entry.icon}.svg`} alt={entry.conditions} />
            <span>{entry.tempmax}&#176; / {entry.tempmin}&#176;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WeatherWeekView;
