import { useState } from 'react';
import s from './Modal.module.css';

import { toast } from 'react-toastify';
import { v1 } from "uuid";

import cityImg from '../../services/cityImage';


const Modal = ({ modalActive, setModalActive, onSubmit, onChangeStartDate, onChangeEndDate, addCard, tomorrowFormatted, twoWeeksLaterFormatted }) => {
  // debugger

  const [searchCity, setSearchCity] = useState('');
  const [startDate, setStartDate] = useState(tomorrowFormatted);
  const [endDate, setEndDate] = useState('');

  const currentDateString = new Date().toISOString().split("T")[0];
  const twoWeeksLaterFormattedFirst = twoWeeksLaterFormatted(currentDateString);

  const anotherDateString = startDate;
  const twoWeeksLaterFormattedSecond = twoWeeksLaterFormatted(anotherDateString);

  const classes = s.modal + ' ' + s.modal_active;

  const clearInput = () => {
    setSearchCity('');
    setStartDate('');
    setEndDate('')
  }

  const closeModal = () => {
    setModalActive(false);
    clearInput();
  }

  const keyPressEsc = (e) => {
    if (e.key === "Escape") {
      setModalActive(false);
      clearInput();
    }
  }

  const handleAddCard = () => {
    if (!searchCity.trim() || !startDate || !endDate) {
      toast("Enter the city, start and end date!");
      return;
    } else {
      addCard(searchCity, startDate, endDate);
      setModalActive(false);
      clearInput();
    }
  }

  const handleNameCityChange = e => {
    const inputText = e.currentTarget.value;
    setSearchCity(inputText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))


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
                {cityImg.map((city) => (
                  <option key={v1()} value={city.cityName} />
                ))}
              </datalist>
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
        </form>
        <div className={s.btn_modal}>
          <button className={s.btn_modal_close} onClick={closeModal}>Cancel</button>
          <button type="submit" onClick={handleAddCard} >Save</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;