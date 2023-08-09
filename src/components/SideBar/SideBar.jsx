import { useState, useEffect } from 'react'
import CurrentWeatherCity from './CurrentWeatherCity/CurrentWeatherCity';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import ErrorView from '../ErrorView/ErrorView';
import s from './SideBar.module.css';
import api from '../../services/weatherCityAPI'

function SideBar({ searchCity, startDate }) {
  // debugger
  const [request, setRequest] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle')


  useEffect(() => {
    if (!searchCity) {
      return;
    }

    api.weatherCityAPI(searchCity)
      .then(request => {
        setRequest(request);
        setStatus('resolved')

      })
      .catch(error => {
        setError(error);
        setStatus('rejected')

      })
  }, [searchCity])


  if (status === 'resolved') {
    return (
      <div className={s.sidebar}>
        <CurrentWeatherCity request={request} />
        <CountdownTimer startDate={startDate} />
      </div>
    )
  }

  if (status === 'error') {
    return <ErrorView message={error.message} />
  }

}

export default SideBar;