import { useState } from 'react'
import s from './Modal.module.css'

// import CityInput from './CityInput'

const Modal = ({ modalActive, setModalActive, onSubmit, onChangeStartDate, onChangeEndDate, addCard, cards, tomorrowFormatted, twoWeeksLaterFormatted }) => {
  // debugger

  const [searchCity, setSearchCity] = useState('');
  const [startDate, setStartDate] = useState(tomorrowFormatted);
  const [endDate, setEndDate] = useState('');

  const currentDateString = new Date().toISOString().split("T")[0];
  // console.log(currentDateString)
  const twoWeeksLaterFormattedFirst = twoWeeksLaterFormatted(currentDateString);

  const anotherDateString = startDate;
  const twoWeeksLaterFormattedSecond = twoWeeksLaterFormatted(anotherDateString);

  const classes = s.modal + ' ' + s.modal_active;
  // const selectedCityInfo = cards.find((city) => city.cityName === searchCity);


  const closeModal = () => {
    setModalActive(false);
  }

  const keyPressEsc = (e) => {
    if (e.key === "Escape") {
      setModalActive(false)
    }
  }

  const handleAddCard = () => {
    addCard(searchCity, startDate, endDate);
    setModalActive(false);
  }

  const handleNameCityChange = e => {
    setSearchCity(e.currentTarget.value.toLowerCase())
  }

  const handleStartDateChange = e => {
    setStartDate(e.currentTarget.value)
  }

  const handleEndDateChange = e => {
    setEndDate(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchCity);
    onChangeStartDate(startDate);
    onChangeEndDate(endDate);
    setSearchCity('');
    setStartDate('');
    setEndDate('')
  }


  return (
    <div className={modalActive ? classes : s.modal} onClick={closeModal} onKeyDown={keyPressEsc}>
      <div className={s.modal_content} onClick={e => e.stopPropagation()} >
        <div className={s.header}>
          <h4>Create trip</h4>
          <button className={s.btn_close} onClick={closeModal}>❌</button>
        </div>

        <span className={s.border_line_top}></span>

        <form onSubmit={handleSubmit}>
          <div className={s.input_date}>
            <div>
              <label><span className={s.required_field}>*</span>City</label>
              <input
                type="text"
                id="city"
                value={searchCity}
                placeholder="Please select a city"
                onChange={handleNameCityChange}
                list="cities" />
              <datalist id="cities">
                {cards.map((city, index) => (
                  <option key={index} value={city.cityName} label={city.cityName} />
                ))}
              </datalist>
              {/* {selectedCityInfo && (
                <div>
                  <h2>{selectedCityInfo.cityName}</h2>
                  <img src={selectedCityInfo.img} alt={selectedCityInfo.cityName} />
                </div>
              )} */}
            </div>
            <div>
              <label><span className={s.required_field}>*</span>Start date</label>
              <input
                type="date"
                id="start"
                value={startDate}
                min={tomorrowFormatted()}
                max={twoWeeksLaterFormattedFirst}
                onChange={handleStartDateChange} />
            </div>
            <div>
              <label><span className={s.required_field}>*</span>End date</label>
              <input
                type="date"
                id="end"
                value={endDate}
                min={startDate}
                max={twoWeeksLaterFormattedSecond}
                onChange={handleEndDateChange} />
            </div>
          </div>
          <span className={s.border_line_bottom}></span>
          <div className={s.btn_modal}>
            <button onClick={closeModal}>Cancel</button>
            <button type="submit" onClick={handleAddCard} >Save</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Modal;