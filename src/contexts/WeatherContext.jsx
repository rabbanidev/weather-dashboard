/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";
import { useFetchingWeather } from "../hooks";

const WeatherContext = createContext(null);

export default function WeatherProvider({ children }) {
  const weather = useFetchingWeather();

  return (
    <WeatherContext.Provider value={{ ...weather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  return useContext(WeatherContext);
};
