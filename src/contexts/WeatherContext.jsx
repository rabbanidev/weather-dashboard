/* eslint-disable react/prop-types */

import { createContext } from "react";
import { useFetchingWeather } from "../hooks";

export const WeatherContext = createContext(null);

export default function WeatherProvider({ children }) {
  const weather = useFetchingWeather();

  return (
    <WeatherContext.Provider value={{ ...weather }}>
      {children}
    </WeatherContext.Provider>
  );
}
