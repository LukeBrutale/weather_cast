import AddCardCity from './AddCardCity/AddCardCity'


const AddCity = ({ setModalActive, removeCard, filteredCards, filterCityWeather }) => {
  // debugger


  return (
    <AddCardCity
      setModalActive={setModalActive}
      removeCard={removeCard}
      filteredCards={filteredCards}
      filterCityWeather={filterCityWeather}
    />

  )
};

export default AddCity;