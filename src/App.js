import "./App.css";

import { useState, useEffect } from "react";
import { v1 } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import cityImg from "./services/cityImage";

import Header from "./components/Header/Header";
import SearchCity from "./components/SearchCity/SearchCity";
import AddCity from "./components/AddCity/AddCity";
import Modal from "./components/Modal/Modal";
import SideBar from "./components/SideBar/SideBar";
import SearchCityPhoto from "./components/SeacrhCityPhoto/SearchCityPhoto";
import WeatherWeekView from "./components/WeatherWeekView/WeathetWeekView";

const defaultImg = "https://media.istockphoto.com/id/1206575314/fr/vectoriel/image-non-disponible-ic%C3%B4ne.jpg?s=170667a&w=0&k=20&c=12KccDH9dWe-WD9IPmS25ik_-rZfd8qUxujILlYG-Uo=";

function App() {
  // debugger;

  const dateStart = addDays(new Date(), 2).toISOString().split("T")[0];
  const dateEnd = addDays(new Date(), 5).toISOString().split("T")[0];

  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("userData")) ?? [
      { id: v1(), cityName: "London", startDate: dateStart, endDate: dateEnd, img: getCityImg("London") },
      { id: v1(), cityName: "Kyiv", startDate: dateStart, endDate: dateEnd, img: getCityImg("Kyiv") },
      { id: v1(), cityName: "Los Angeles", startDate: dateStart, endDate: dateEnd, img: getCityImg("Los Angeles") },
    ],
  );

  const [request, setRequest] = useState(null);

  const [searchCity, setSearchCity] = useState(cards.length > 0 ? cards[0].cityName : "");
  const [startDate, setStartDate] = useState(cards.length > 0 ? cards[0].startDate : "");
  const [endDate, setEndDate] = useState(cards.length > 0 ? cards[0].endDate : "");
  const [modalActive, setModalActive] = useState(false);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [urlImg, setUrlImg] = useState(null);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(cards));
  }, [cards]);

  function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  function removeCard(id) {
    let filteredCards = cards.filter(card => card.id !== id);
    setCards(filteredCards);
    setFilteredCards(filteredCards);
  }

  async function getCityImg(cityImg) {
    console.log("фото в  getCityImg", cityImg);
    if (cityImg) {
      await cityImg;
      setUrlImg(cityImg);
    }
  }

  async function addCard(cityName, startDate, endDate) {
    await urlImg;
    console.log("фото в addCard", urlImg);
    let newCard = { id: v1(), cityName: cityName, startDate: startDate, endDate: endDate, img: urlImg ? urlImg : defaultImg };
    let newCityCard = [newCard, ...cards];
    setCards(newCityCard);
    setFilteredCards(newCityCard);
    setRequest(cityName);
  }

  function filterCityWeather(id) {
    const filterCityCard = cards.filter(card => card.id === id);
    setSearchCity(filterCityCard[0].cityName);
    setStartDate(filterCityCard[0].startDate);
    setEndDate(filterCityCard[0].endDate);
  }

  function tomorrowFormatted() {
    const currentInitDate = new Date();
    const tomorrow = new Date(currentInitDate);
    tomorrow.setDate(currentInitDate.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
    return tomorrowFormatted;
  }

  function twoWeeksLaterFormatted(inputDate) {
    if (!inputDate) {
      inputDate = new Date();
    } else {
      inputDate = new Date(inputDate);
    }
    const twoWeeksLater = new Date(inputDate);
    twoWeeksLater.setDate(inputDate.getDate() + 14);
    const twoWeeksLaterFormatted = twoWeeksLater.toISOString().split("T")[0];
    return twoWeeksLaterFormatted;
  }

  function updateFilteredCards(newFilteredCards) {
    setFilteredCards(newFilteredCards);
  }

  return (
    <div className="App">
      <Header />
      <SearchCity cities={cards} updateFilteredCards={updateFilteredCards} />
      <SearchCityPhoto searchCityName={request} setSearchCityName={setRequest} getCityImg={getCityImg} />
      <AddCity searchCity={searchCity} searchCardCity={setSearchCity} setModalActive={setModalActive} startDate={startDate} endDate={endDate} removeCard={removeCard} filteredCards={filteredCards} filterCityWeather={filterCityWeather} />
      <WeatherWeekView searchCity={searchCity} startDate={startDate} endDate={endDate} />
      <SideBar searchCity={searchCity} startDate={startDate} />
      <Modal modalActive={modalActive} setModalActive={setModalActive} onSubmit={setSearchCity} onChangeStartDate={setStartDate} onChangeEndDate={setEndDate} addCard={addCard} tomorrowFormatted={tomorrowFormatted} twoWeeksLaterFormatted={twoWeeksLaterFormatted} />
      <ToastContainer autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
