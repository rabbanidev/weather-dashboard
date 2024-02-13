import { useContext } from "react";
import { WeatherContext } from "../contexts";

const useWeather = () => {
  return useContext(WeatherContext);
};

export default useWeather;
