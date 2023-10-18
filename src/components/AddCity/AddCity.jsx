import React, { useState, useEffect } from 'react'

import WeatherWeekView from '../WeatherWeekView/WeathetWeekView';
import PendingView from '../PendingView/PendingView';
import AddCardCity from './AddCardCity/AddCardCity'
import ErrorView from '../ErrorView/ErrorView';


import api from '../../services/weatherWeekAPI'


const AddCity = ({ request, setModalActive, removeCard, filteredCards, filterCityWeather }) => {
  // debugger
  // const [request, setRequest] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle')



  // useEffect(() => {
  //   if (!searchCity) {
  //     return;
  //   }
  //   setStatus('pending')
  //   api.weatherWeekAPI(searchCity, startDate, endDate)
  //     .then(request => {
  //       setRequest(request);
  //       setStatus('resolved')
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setStatus('rejected')
  //     })
  // }, [searchCity, startDate, endDate])




  if (status === 'idle') {
    return (
      <>
        <AddCardCity
          setModalActive={setModalActive}
          removeCard={removeCard}
          filteredCards={filteredCards}
          filterCityWeather={filterCityWeather}
        />
        <WeatherWeekView request={request} />
      </>
    )
  }

  // if (status === 'pending') {
  //   return <PendingView searchCity={request.address} />
  // }

  if (status === 'rejected') {
    return <ErrorView message={error.message} />
  }

  // if (status === 'resolved') {
  //   return (
  //     <>
  //       <AddCardCity
  //         setModalActive={setModalActive}
  //         removeCard={removeCard}
  //         filteredCards={filteredCards}
  //         filterCityWeather={filterCityWeather}
  //       />
  //       <WeatherWeekView request={request} />
  //     </>
  //   )
  // }
};

export default AddCity;