import { useState, useEffect } from 'react'

import WeatherWeekView from '../WeatherWeekView/WeathetWeekView';
import PendingView from '../PendingView/PendingView';
import AddCardCity from './AddCardCity/AddCardCity'
import ErrorView from '../ErrorView/ErrorView';

import api from '../../services/weatherWeekAPI'


function AddCity({ searchCity, setModalActive, startDate, endDate, cards, removeCard, filterCard }) {
  // debugger
  const [request, setRequest] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle')


  useEffect(() => {
    if (!searchCity) {
      return;
    }
    setStatus('pending')
    api.weatherWeekAPI(searchCity, startDate, endDate)
      .then(request => {
        setRequest(request);
        setStatus('resolved')
      })
      .catch(error => {
        setError(error);
        setStatus('rejected')
      })
  }, [searchCity, startDate, endDate])




  if (status === 'idle') {
    return <AddCardCity setModalActive={setModalActive} cards={cards} removeCard={removeCard} filterCard={filterCard} />
  }

  if (status === 'pending') {
    return <PendingView searchCity={searchCity} />
  }

  if (status === 'rejected') {
    return <ErrorView message={error.message} />
  }

  if (status === 'resolved') {
    return (
      <>
        <AddCardCity setModalActive={setModalActive} cards={cards} removeCard={removeCard} filterCard={filterCard} />
        <WeatherWeekView request={request} />
      </>
    )
  }


}

export default AddCity;