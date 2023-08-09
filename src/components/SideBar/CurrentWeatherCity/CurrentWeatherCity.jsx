import s from './CurrentWeatherCity.module.css'


const CurrentWeatherCity = ({ request }) => {
  const options = { weekday: 'long' };

  return (
    <div className={s.container}>
      <h1>{request ? new Date(request.days[0].datetime).toLocaleString('en-US', options) : "--:--"}</h1>
      <div className={s.icon_temp}>
        <img src={request && `./${request.days[0].icon}.svg`} alt={request && request.days[0].conditions} />
        <span className={s.temp}>{request && request.days[0].temp}&#8451;</span>
      </div>
      <h2>{request && request.address}</h2>
    </div>
  )
}

export default CurrentWeatherCity;