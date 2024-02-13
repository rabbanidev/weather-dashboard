/* eslint-disable react/prop-types */

import { useState } from "react";
import { createContext } from "react";

export const LocationContext = createContext(null);

export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const addSelectedLocation = (payload) => {
    setSelectedLocation({ ...selectedLocation, ...payload });
  };

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        addSelectedLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
