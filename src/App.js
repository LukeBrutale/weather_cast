import "./App.css";

import { useState, useEffect } from "react";
import { v1 } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import SearchCity from "./components/SearchCity/SearchCity";
import AddCity from "./components/AddCity/AddCity";
import Modal from "./components/Modal/Modal";
import SideBar from "./components/SideBar/SideBar";

function App() {
  // debugger;

  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("userData")) ?? [
      { id: v1(), cityName: "London", startDate: "2023-08-16", endDate: "2023-08-18", img: "https://image.arrivalguides.com/500x500/09/1dd23cc06c31c31ba7df72f2c74db5bc.jpg" },
      { id: v1(), cityName: "Kyiv", startDate: "2023-08-15", endDate: "2023-08-20", img: "https://visitukraine.today/media/blog/previews/fAWjVMXYLXywGzneHknrh9tuBRtdH12vJjT5awRu.webp" },
      { id: v1(), cityName: "Los Angeles", startDate: "2023-08-20", endDate: "2023-08-25", img: "https://griffithobservatory.org/wp-content/uploads/2021/12/cameron-venti-6QDvwq2Fjsc-unsplash-scaled.jpg" },
    ],
  );

  const [searchCity, setSearchCity] = useState(cards[0].cityName);
  const [modalActive, setModalActive] = useState(false);
  const [startDate, setStartDate] = useState(cards[0].startDate);
  const [endDate, setEndDate] = useState(cards[0].endDate);
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(cards));
  }, [cards]);

  function removeCard(id) {
    let filteredCards = cards.filter(card => card.id !== id);
    setCards(filteredCards);
  }

  function addCard(cityName, startDate, endDate) {
    let newCard = { id: v1(), cityName: cityName, startDate: startDate, endDate: endDate, img: "https://media.istockphoto.com/id/1206575314/fr/vectoriel/image-non-disponible-ic%C3%B4ne.jpg?s=170667a&w=0&k=20&c=12KccDH9dWe-WD9IPmS25ik_-rZfd8qUxujILlYG-Uo=" };
    let newCityCard = [newCard, ...cards];
    setCards(newCityCard);
  }

  function filterCityWeather(id) {
    const filterCityCard = cards.filter(card => card.id === id);
    setSearchCity(filterCityCard[0].cityName);
    setStartDate(filterCityCard[0].startDate);
    setEndDate(filterCityCard[0].endDate);
  }

  function tomorrowFormatted() {
    const currentInitDate = new Date();
    // console.log("currentInitDate", currentInitDate);

    const tomorrow = new Date(currentInitDate);
    tomorrow.setDate(currentInitDate.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
    return tomorrowFormatted;
  }

  function twoWeeksLaterFormatted(inputDate) {
    const currentDate = new Date(inputDate);
    console.log("currentDate", currentDate);

    const twoWeeksLater = new Date(currentDate.toISOString());
    twoWeeksLater.setDate(currentDate.getDate() + 14);
    console.log("twoWeeksLater", twoWeeksLater);

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
      <AddCity searchCity={searchCity} searchCardCity={setSearchCity} setModalActive={setModalActive} startDate={startDate} endDate={endDate} cards={cards} removeCard={removeCard} filteredCards={filteredCards} filterCityWeather={filterCityWeather} />
      <SideBar searchCity={searchCity} startDate={startDate} />
      <Modal modalActive={modalActive} setModalActive={setModalActive} onSubmit={setSearchCity} onChangeStartDate={setStartDate} onChangeEndDate={setEndDate} addCard={addCard} cards={cards} tomorrowFormatted={tomorrowFormatted} twoWeeksLaterFormatted={twoWeeksLaterFormatted} />
      <ToastContainer autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
